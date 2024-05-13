function passwordGenerate() {
  let length = document.getElementById("customRange1").value;

  let includeUppercase = document.getElementById("flexCheckDefault1");
  let includeLowercase = document.getElementById("flexCheckDefault2");
  let includeSymbols = document.getElementById("flexCheckDefault3");
  let includeNumbers = document.getElementById("flexCheckDefault4");

  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let symbolChars = "@#$%&*";
  let numberChars = "0123456789";

  let allChars = "";

  if (includeUppercase.checked) {
    allChars += uppercaseChars;
  }
  if (includeLowercase.checked) {
    allChars += lowercaseChars;
  }
  if (includeSymbols.checked) {
    allChars += symbolChars;
  }
  if (includeNumbers.checked) {
    allChars += numberChars;
  }

  if (
    !includeUppercase &&
    !includeLowercase &&
    !includeSymbols &&
    !includeNumbers
  ) {
    document.querySelector(".password-screen input").value = "";
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.querySelector(".password-screen input").value = password;
}

let sliderValue = document.getElementById("slider-value");
let sliderLength = document.getElementById("customRange1");
sliderValue.textContent = sliderLength.value;

sliderLength.addEventListener("input", () => {
  sliderValue.textContent = sliderLength.value;
});

function copied() {
  let copyText = document.querySelector(".password-screen input");
  console.log(copyText.value);
}
