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

var input;

for (i = 0; i < securityQuestions.length; i++){
input = prompt (securityQuestions[i].question);
if(input !== securityQuestions[i].expectedAnswer){
	alert("Incorrect");
	stop = true;
	break;
}
}

else{
	alert("stop now!")
}