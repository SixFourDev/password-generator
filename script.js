function getPasswordSpecs() {
  // Defines each array of different types of characters to include in the password
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // Prompt the user for the password length and convert the input to a number
  var passwordLength = window.prompt("How long should the password be? (Please enter a number between 8 and 128)");

  // Check if the input is invalid, then return to screen and ask them to enter a valid number
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid number. Please enter a number between 8 and 128.");
    return;
  }

  // Confirm which character types the user wants to include in their password
  var includeLowerCase = window.confirm("Include lowercase letters?");
  var includeUpperCase = window.confirm("Include uppercase letters?");
  var includeSpecialCharacter = window.confirm("Include special characters?");
  var includeNumber = window.confirm("Include numbers?");

  // Check to make sure user has selected at least one character type 
  if (!includeLowerCase && !includeUpperCase && !includeSpecialCharacter && !includeNumber) {
    window.alert("Please select at least one character type.");
    return;
  }

  // Object created to store requirements for password. Easier to pass them between functions.
  var passwordSpecs = {
    length: passwordLength,
    lowerCase: includeLowerCase,
    upperCase: includeUpperCase,
    specialCharacter: includeSpecialCharacter,
    numbers: includeNumber,
    lowerCaseChars: lowerCase,
    upperCaseChars: upperCase,
    specialChars: specialCharacter,
    numberChars: numbers
  };

  // Return the password specs object
  return passwordSpecs;
}

function generatePassword() {
  // Call getPasswordSpecs to get the password specs
  var passwordSpecs = getPasswordSpecs();

  // If getPasswordSpcs returns undefined, return with an empty password
  if (!passwordSpecs) {
    return "";
  }

  // Create an empty array to hold the characters to be included in the password
  var passwordCharacters = [];

  // If the password specification includes lowercase characters, add the lowercase array to the password characters array
  if (passwordSpecs.lowerCase) {
    passwordCharacters = passwordCharacters.concat(passwordSpecs.lowerCaseChars);
  }
  // If the password specification includes uppercase characters, add the uppercase array to the password characters array
  if (passwordSpecs.upperCase) {
    passwordCharacters = passwordCharacters.concat(passwordSpecs.upperCaseChars);
  }
  // If the password specification includes special characters, add the special characters array to the password characters array
  if (passwordSpecs.specialCharacter) {
    passwordCharacters = passwordCharacters.concat(passwordSpecs.specialChars);
  }
  // If the password specification includes number characters, add the numbers array to the password characters array
  if (passwordSpecs.numbers) {
    passwordCharacters = passwordCharacters.concat(passwordSpecs.numberChars);
  }
  // Empty string that will store the generated password
  var password = " ";
  // Starts the for loop and runs as many characters the length of the password will be
  for (var i = 0; i < passwordSpecs.length; i++) {
    // Generates a random index between 0 and length of passwordCharacters array using Math random and fllor to round down the number
    var randomIndex = Math.floor(Math.random() * passwordCharacters.length);
    password = password + passwordCharacters[randomIndex];
  }
  // closes the foor loop
  return password;
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
