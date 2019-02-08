function addQuestionItem() {
	let listQCM = document.createElement("P");
	let input = document.getElementById("questionText");
	listQCM.innerHTML = input.value;
	input.value = "";

	document.getElementById("QCForm").appendChild(listQCM);
}

let coucou = function hello() {
	alert("coucou");

}
