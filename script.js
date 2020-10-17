// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //New code
  //Parameters
function generatePassword() {
var length = prompt("How many characters?")
if (length < 8 || length > 128) {
  alert("Please enter a number between 8 and 128")
} else {
var lowerCase = confirm("Include lower case characters?")
var upperCase = confirm("include upper case characters?")
var num = confirm("Include numbers?")
var special = confirm("Include special characters?")

//Variables
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = lower.toUpperCase()
var numbers = "0123456789"
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
var lowerUpper = lower + upper
var lowerNum = lower + numbers
var lowerSpecial = lower + specialChar
var lowerUpperNum = lowerUpper + numbers
var lowerUpperSpecial = lowerUpper + specialChar
var upperNum = upper + numbers
var upperNumSpecial = upperNum + specialChar
var upperSpecial = upper + specialChar
var numSpecial = numbers + specialChar
var all = lowerUpperSpecial + numbers

var random = ""

//True False False False
if (lowerCase === true && upperCase === false && num === false && special === false) {
  for (var i = 0; i < length; i++) {
  random += lower.charAt(Math.floor(Math.random() * lower.length))
  }
} 

//False True False False
else if (lowerCase === false && upperCase === true && num === false && special === false) {
for (var i = 0; i < length; i++) {
random += upper.charAt(Math.floor(Math.random() * upper.length))
  }
} 

//False Flase True False
else if (lowerCase === false && upperCase === false && num === true && special === false) {
for (var i = 0; i < length; i++) {
random += numbers.charAt(Math.floor(Math.random() * numbers.length))
}
} 

// False False False True
else if (lowerCase === false && upperCase === false && num === false && special === true) {
for (var i = 0; i < length; i++) {
random += specialChar.charAt(Math.floor(Math.random() * specialChar.length))
}
} 

// True True False False
else if (lowerCase === true && upperCase === true && num === false && special === false) {
for (var i = 0; i < length; i++) {
random += lowerUpper.charAt(Math.floor(Math.random() * lowerUpper.length))
}
}

// True True True False
else if (lowerCase === true && upperCase === true && num === true && special === false) {
for (var i = 0; i < length; i++) {
random += lowerUpperNum.charAt(Math.floor(Math.random() * lowerUpperNum.length))
}
} 

// True True True True
else if (lowerCase === true && upperCase === true && num === true && special === true) {
for (var i = 0; i < length; i++) {
random += all.charAt(Math.floor(Math.random() * all.length))
}
}

// True False True False
else if (lowerCase === true && upperCase === false && num === true && special === false) {
for (var i = 0; i < length; i++) {
random += lowerNum.charAt(Math.floor(Math.random() * lowerNum.length))
}
}

// True False False True
else if (lowerCase === true && upperCase === false && num === false && special === true) {
for (var i = 0; i < length; i++) {
random += lowerSpecial.charAt(Math.floor(Math.random() * lowerSpecial.length))
}
}

// True True False True
else if (lowerCase === true && upperCase === true && num === false && special === true) {
for (var i = 0; i < length; i++) {
random += lowerUpperSpecial.charAt(Math.floor(Math.random() * lowerUpperSpecial.length))
}
}

// False True True False
else if (lowerCase === false && upperCase === true && num === true && special === false) {
for (var i = 0; i < length; i++) {
random += upperNum.charAt(Math.floor(Math.random() * upperNum.length))
}
}

// False True True True
else if (lowerCase === false && upperCase === true && num === true && special === true) {
for (var i = 0; i < length; i++) {
random += upperNumSpecial.charAt(Math.floor(Math.random() * upperNumSpecial.length))
}
}

// False True False True
else if (lowerCase === false && upperCase === true && num === false && special === true) {
for (var i = 0; i < length; i++) {
random += upperSpecial.charAt(Math.floor(Math.random() * upperSpecial.length))
}
}

// False False True True
else if (lowerCase === false && upperCase === false && num === true && special === true) {
for (var i = 0; i < length; i++) {
random += numSpecial.charAt(Math.floor(Math.random() * numSpecial.length))
}
}

//False False False False
else {
alert("Please select at least one")
}


return random

}
  
}   
  //End
    

  


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
