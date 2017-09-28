console.log("login.js loaded");
userLogin = {userName: "lperry34", password: "LeviRules"}

var input;
var accepted;

while(!accepted){
	input = prompt("Enter password for " + userLogin.userName)
	if (input === userLogin.password){
		alert("Correct!");
		accepted = true;
	}
	else{
		Alert("Wrong!");
	}
}