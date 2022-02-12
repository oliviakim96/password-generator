/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page 
*/
// Assignment code here


// Declare variables
var generateBtn = document.querySelector("#generate");
var characterLength = 8;
var choiceArray = [] 
var optionArray=["~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","<",">","{","}","[","}","?","/",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);

//Add functions
function writePassword() {
  var promptAns = promptQuestion();
  var passwordText = document.querySelector("#password");
  if (promptAns) {
    var newPassword =generatePassword();
    passwordText.value = newPassword;
  }
  else {
    passwordText.value="";
  }
}

function generatePassword(){
  var password = "";
  for (var i=0; i<characterLength;i++) {
    var randomIndex = Math.floor(Math.random()*choiceArray.length);
    password += choiceArray[randomIndex];
  }
  return password;
}

function promptQuestion(){
  var firstQuestion=window.confirm("Would you like to choose which criteria to include in the password?");
  if (firstQuestion===false){
    window.alert("You must select ok to generate password.");
    return firstQuestion;
  }
  choiceArray=[];
  characterLength= parseInt(prompt("Please provide the length of the password (it must be at least 8 and no more than 128 characters)."));
  if (isNaN(characterLength)||characterLength<8 ||characterLength>128) {
    window.alert("The length of password must be at least 8 and no more than 128. Please provide valid answer.");
    return false;
  }
  if(confirm("Please confirm that whether or not to include lowercase, uppercase, numeric, and special characters")){
    choiceArray=choiceArray.concat(optionArray);
  }
  return true;
}










   /*else if (firstQuestion==="YES"){
      
      
      if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("c;
        return false;
       if(confirm("));
       {
        
       }
       return true;
  } else {
    window.alert("You must ")
  }
}*/


  


