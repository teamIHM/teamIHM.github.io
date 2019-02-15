function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function trid(str) {
	return String(str).replace(/&/g, 'et').replace(/</g, 'inf').replace(/>/g, 'sup').replace(/"/g, 'quot');
}

function addQuestionItem() {
	let input = document.getElementById("questionText");
	if(document.getElementById(trid(input.value.trim())) || document.getElementById(trid("text"+input.value.trim())) || document.getElementById(trid("list"+input.value.trim()))) {
		return;
	}
	if(htmlEntities(input.value.trim())) {
		let divQuestion = document.createElement("DIV");
		divQuestion.className = "question";
		divQuestion.id = trid(input.value.trim().split(' ').join('_'));
		divQuestion.innerHTML = "<p>" + htmlEntities(input.value) + "<p>";
		divQuestion.innerHTML += "<ul id=\"list"+trid(input.value.trim().split(' ').join('_'))+"\"></ul>";
		divQuestion.innerHTML += "<button class=\"btn\" id=\"addChoice_"+trid(input.value.trim().split(' ').join('_'))+"\" onclick=\"addChoice("+divQuestion.id+")\"/>Ajouter une proposition</button>";
		divQuestion.innerHTML += "<input type=\"text\" id=\"text"+trid(input.value.trim().split(' ').join('_'))+"\"/>";
		input.value = "";
		document.getElementById("QCMForm").append(divQuestion);
	}
}

function addChoice(questionID) {
	console.log("1 OK");
	let input = document.getElementById(trid("text"+questionID.id));
	console.log("1 OK");
	if(document.getElementById(trid(input.value.trim().split(' ').join('_')+"_"+questionID.id))) {
		return;
	}
	console.log("1 OK");
	if(input.value) {
		let listElem = document.createElement("LI");
	console.log("1 OK");
		listElem.innerHTML = "<input type=\"checkbox\" id=\""+trid(input.value.trim().split(' ').join('_')+"_"+questionID.id)+"\"/>";
		listElem.innerHTML += "<label for=\""+trid(input.value.trim().split(' ').join('_')+"_"+questionID.id)+"\">"+htmlEntities(input.value.trim())+"</label>";
	console.log("1 OK");
		input.value = "";
		document.getElementById(trid("list"+questionID.id)).appendChild(listElem);
	console.log("1 OK");
	}
}



