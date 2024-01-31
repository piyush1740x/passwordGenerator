const upparSet = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerSet = "qwertyuiopasdfghjklzxcvbnm";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*/._";

const pass = document.getElementById("disp");
const upparCase = document.getElementById("uppar");
const lowerCase = document.getElementById("lower");
const numbers = document.getElementById("numbers");
const special = document.getElementById("special");
const lengthInput = document.getElementById("length");

function randomData(dataSet) {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

function generatePassword() {
    const length = parseInt(lengthInput.value);
    if (isNaN(length) || length <= 0) {
        alert("Please enter a valid password length");
        return;
    }

    let password = "";
    while (password.length < length) {
        if (upparCase.checked) {
            password += randomData(upparSet);
        }
        if (lowerCase.checked) {
            password += randomData(lowerSet);
        }
        if (numbers.checked) {
            password += randomData(numberSet);
        }
        if (special.checked) {
            password += randomData(symbolSet);
        }
    }

    pass.value = password.slice(0, length);
}

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    generatePassword();
});
