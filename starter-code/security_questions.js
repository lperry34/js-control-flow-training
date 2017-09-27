console.log("security_questions.js loaded");
var securityQuestions = [
{
	question: "What city are you from?",
	expectedAnswer: "Mount Vernon"
	},

	{
	question: "What is your favorite color?",
	expectedAnswer: "blue"
	},

	{
	question: "What is your mom's name?",
	expectedAnswer: "Sherri"
	},
];

var input = ""
var stop = false;
for (i = 0; i < securityQuestions.length; i++){
input = prompt (securityQuestions[i].question);
if(input !== securityQuestions[i].expectedAnswer){
	alert("Incorrect");
	stop = true;
	break;
}
}

if (stop = true){
	alert("stop that!");
}