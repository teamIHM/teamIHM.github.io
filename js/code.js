function addQuestionItem() {
	let listQCM = document.createElement("P");
	let input = document.getElementById("questionText");
	listQCM.innerHTML = input.value;
	input.value = "";

	document.getElementById("QCMForm").appendChild(listQCM);
}

let coucou = function hello() {
	alert("coucou");

}
