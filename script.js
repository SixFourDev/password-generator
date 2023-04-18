function generatePassword() {
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var passwordLength = window.prompt("How long should the password be?")
  console.log(passwordLength);
  var includeLowerCase = window.confirm("Make sure to include a lowercase letter.")
  console.log(includeLowerCase);
  var includeUpperCase = window.confirm("Make sure to include a uppercase letter.")
  console.log(includeUpperCase);
  var includeSpecialCharacter = window.confirm("Make sure to include a special character.")
  console.log(includeSpecialCharacter);
  var includeNumber = window.confirm("Make sure to include a number")
  console.log(includeNumber);
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
