// Assignment code here
// made the password variable global
let password = "";
// created the generate password function
function generatePassword()
{
  // initialized the variable used inside this function
  let charset = [];
  let count = 0;
  //password length prompt and the user will enter a string
  let password_length = prompt("Password length: ");
  // converted the string into an integer for verifying the password
  //length
  password_length = parseInt(password_length);
  // conditional statement to verify the password meets the required standards
  if(password_length < 8)
  {
    alert("Invalid password Length");
    generatePassword();
  }
  else if(password_length > 128)
  {
    alert("Invalid password Length");
    generatePassword();
  }
  else
  {
    alert("valid password length");
  }

  // prompt to include the uppercase
  let upper_case = prompt("Upper case? ");
  // conditional statement to include th uppercase letters
  if (upper_case === "yes") {
    let upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    charset = charset + upper;
    alert("Upper Case Included");
  }
  // prompt to include the lower case
  let lower_case = prompt("Lower case? ");
  // conditional statements to include the lower case letters
  if (lower_case === "yes") {
    let lower = charset + ["abcdefghijklmnopqrstuvwxyz"];
    charset = charset = lower;
    alert("Lower case Included");
  }
 // prompt to include the numbers
  let numbers = prompt("Numbers? ");
  // conditional statements to include the numbers
  if (numbers === "yes") {
    let number = charset + ["0123456789"];
    charset = charset + number;
    alert("Numbers Included");
  }
  // prompt to include the numbers
  // conditional statement to include the special characters
  let special_characters = prompt("Symbols? ");
  if (special_characters === "yes"){
    let special_characters = charset + ["~!@#$%^&*()_+=-[]{}|\/"];
    charset = charset + special_characters;
    alert("Special characters Included");
  }
  // loop to add randomly selected elements by Math random method
  while (count <= password_length)
  {
    let character = charset[Math.floor(Math.random() * charset.length)];
    password = password + character;
    count++;
  }
  console.log(password);
return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const passWord = generatePassword();
  console.log(passWord);
  const passwordText = document.querySelector("#password");
  passwordText.value = passWord;
  document.getElementById("password").innerHTML = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
