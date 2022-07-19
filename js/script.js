// Declaring Variables
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialcharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}
// Randomizer Function
function randomizer (lowercase,uppercase,numeric,special) {
  var randomSpecial = specialcharacters.charAt(Math.floor(Math.random() * specialcharacters.length));
  var randomNumeric = numbers[Math.floor(Math.random() * numbers.length)];
  var randomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
  var holder = [];
  var character = "";

  if (uppercase && lowercase) {
    if (Math.random()>0.5) {
      holder+=randomAlphabet.toUpperCase();
    }
  } else if (uppercase && !lowercase) {
    holder+=randomAlphabet.toUpperCase();
  } else if (!uppercase && lowercase) {
    holder+=randomAlphabet;
  }
  if (numeric) {
    holder+=randomNumeric;
  }
  if (special) {
    holder+=randomSpecial;
  }
  if (holder.length > 1) {
    character = holder[Math.floor(Math.random() * holder.length)];
    return character;
  } 
  character = holder;
  return character;
} 


// Criteria For Password
function charTypePrompts(passLength) {
  var confirmSpecial = confirm("Confirm You Want Special Characters");
  var confirmNumeric = confirm("Confirm You Want Numeric Characters");
  var confirmUppercase = confirm("Confirm You Want Uppercase Characters");
  var confirmLowercase = confirm("Confirm You Want Lowercase Characters");

  var password = "";
  while (confirmUppercase == false && confirmLowercase == false) {
    alert("Please Choose Either Uppercase, Lowercase or Both");
    confirmUppercase = confirm("Confirm You Want Uppercase Characters");
    confirmLowercase = confirm("Confirm You Want Lowercase Characters");
  }
for (let i = 0; i < passLength; i++) {
  password+= randomizer(confirmLowercase,confirmUppercase,confirmNumeric,confirmSpecial);

  
}
  return password;
}


// Generates Password
function generatePassword() {
  var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));
  while (length < 8 || length > 128) {
    alert("Password Must Be Between 8 and 128 Characters");
    length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));
  }
  return charTypePrompts(length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


