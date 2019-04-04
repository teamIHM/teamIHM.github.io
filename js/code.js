function userAddQuestion() {
	let question = document.getElementById("questionText");
	if(question.value) {
		changeError(question, "");
		addQuestion(question.value);
		question.value = "";
	}
	else {
		changeError(question, "Votre champs est vide!");

	}
}

function deleteElement(id) {
	let element = document.getElementById(id);
	element.parentNode.removeChild(element);
}

function removeQuestion(id) {
	deleteElement(id);
}

function removeAnswer(id) {
	deleteElement(id);
}

function createClickableDeleteAnswer(id) {
	let button = document.createElement("span");
	button.innerHTML = "[Supprimer la réponse]";
	button.onclick = function() {removeAnswer(id)};
	return button;
}

function createClickableDeleteQuestion(id) {
	let button = document.createElement("p");
	button.innerHTML = "[Supprimer la question]";
	button.onclick = function() {removeQuestion(id)};
	return button;
}

function modifyElement(id) {
	document.getElementById(id).contentEditable = "true";
}

function modifiedElement(id) {
	document.getElementById(id).contentEditable = "false";
}

function userAddAnswer(id) {
	let answer = document.getElementById("answerInput_"+id);
	if(answer.value) {
		changeError(answer, "");
		addAnswer(id, answer.value);
		answer.value = "";
	}
	else {
		changeError(answer, "Votre champs est vide");
	}
}

function createQuestionDiv() {
	const id = $('.question').length + 1;
	let newQuestion = document.createElement("div");
	newQuestion.className = "question";
	newQuestion.id = "question"+id;
	return newQuestion;
}

function createAnswerList(id) {
	let answerList = document.createElement("ul");
	answerList.id = "answers_" + id;
	return answerList;
}

function createAnswerInput(id) {
	let answerInput = document.createElement("input");
	answerInput.id = "answerInput_" + id;
	createErrorField(answerInput, "");
	return answerInput;
}

function createAnswerButton(id) {
	let button = document.createElement("input");
	button.type="button";
	button.className = "answer_button";
	button.value = "Ajouter une réponse";
	button.id = "input_" + id;
	button.onclick = function() {userAddAnswer(id)};
	return button;
}

function createAnswerElement(id, text) {
	let listElem = document.createElement("li");
	listElem.className = "listAnswers_"+id;

	let elem = document.createElement("input");
	elem.type="checkbox";
	elem.className = "checkboxes_"+id;
	const elemID = $(".checkboxes_"+id).length + 1;
	elem.id = id + "_checkbox"+elemID;
	listElem.id = "li_"+elemID;
	
	let label = document.createElement("label");
	label.for=elem.id;
	label.id = "label_"+elem.id;
	label.innerHTML = text;

	label.addEventListener("click", function() {
		modifyElement(label.id);
	});
	label.addEventListener("keypress", function(e) {
		if(e.key === "Enter") {
			modifiedElement(label.id);
		}
	});

	listElem.appendChild(elem);
	listElem.appendChild(label);
	return listElem;
}

function addQuestion(text) {
	let container = document.getElementById("QCMForm");
	let questionDiv = createQuestionDiv();
	let questionTitle = document.createElement("h3");
	questionTitle.id = "titre_"+questionDiv.id
	questionTitle.innerHTML = text;

	questionTitle.addEventListener("click", function() {
		modifyElement(questionTitle.id);
	});
	questionTitle.addEventListener("keypress", function(e) {
		if(e.key === "Enter") {
			modifiedElement(questionTitle.id);
		}
	});
	questionDiv.appendChild(questionTitle);

	let deleter = createClickableDeleteQuestion(questionDiv.id);
	questionDiv.appendChild(deleter);

	let list = createAnswerList(questionDiv.id);
	questionDiv.appendChild(list);
	
	let inputField = createAnswerInput(questionDiv.id);
	questionDiv.appendChild(inputField);

	let sendButton = createAnswerButton(questionDiv.id);
	questionDiv.appendChild(sendButton);

	let error = createErrorField(inputField, "");
	questionDiv.appendChild(error);

	container.appendChild(questionDiv);
}

function changeError(parents, text) {
	let err = document.getElementById("error_"+parents.id);
	err.innerHTML = text;
}

function createErrorField(parents, text) {
	let err = document.createElement("span");
	err.id = "error_"+parents.id;
	err.style = "color:red;";
	err.innerHTML = text;
	return err;	
}

function addAnswer(id, text) {
	let container = document.getElementById("answers_"+id);
	let input = createAnswerElement(id, text);
	let deleter = createClickableDeleteAnswer(input.id);
	input.appendChild(deleter);
	container.appendChild(input);
}
