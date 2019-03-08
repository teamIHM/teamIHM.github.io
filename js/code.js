function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function trid(str) {
	return String(str).replace(/&/g, 'et').replace(/</g, 'inf').replace(/>/g, 'sup').replace(/"/g, 'quot');
}

function addQuestionItem() {
	let input = document.getElementById("questionText").value;
	if(document.getElementById(trid(input.trim())) || document.getElementById(trid("text"+input.trim())) || document.getElementById(trid("list"+input.trim()))) {
		return;
	}
	if(htmlEntities(input.trim())) {
		let divQuestion = document.createElement("DIV");
		divQuestion.className = "question";
		divQuestion.id = trid(input.replace(/[^a-zA-Z]/g, ""));
		divQuestion.innerHTML = "<p>" + htmlEntities(input) + "<p>";
		divQuestion.innerHTML += "<ul id=\"list"+input.replace(/[^a-zA-Z]/g, "")+"\"></ul>";
		divQuestion.innerHTML += "<button class=\"btn\" id=\"addChoice_"+input.replace(/[^a-zA-Z]/g, "")+"\" onclick=\"addChoice("+divQuestion.id+")\"/>Ajouter une proposition</button>";
		divQuestion.innerHTML += "<input type=\"text\" id=\"text"+input.replace(/[^a-zA-Z]/g, "")+"\"/>";
		input = "";
		document.getElementById("QCMForm").append(divQuestion);
	}
}

function addChoice(questionID) {
	console.log("1 OK");
	let input = document.getElementById(trid("text"+questionID.id)).value;
	console.log("1 OK");
	if(document.getElementById(trid(input.replace(/[^a-zA-Z ]/g, "")+"_"+questionID.id))) {
		return;
	}
	console.log("1 OK");
	if(input) {
		let listElem = document.createElement("LI");
	console.log("1 OK");
		listElem.innerHTML = "<input type=\"checkbox\" id=\""+input.replace(/[^a-zA-Z]/g, "")+"_"+questionID.id+"\"/>";
		listElem.innerHTML += "<label for=\""+input.replace(/[^a-zA-Z]/g, "")+"_"+questionID.id+"\">"+htmlEntities(input.trim())+"</label>";
	console.log("1 OK");
		input = "";
		document.getElementById(trid("list"+questionID.id)).appendChild(listElem);
	console.log("1 OK");
	}
}



