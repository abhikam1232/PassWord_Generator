let myInput = document.querySelector(".input");
let btn = document.querySelector(".btn");

let len = 10;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let nums = "1234567890";
let symbols = "!@#$%^&*()_+-[]{}";

let Chars = upperCase + lowerCase + nums + symbols;

function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += nums[Math.floor(Math.random() * nums.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (len > password.length) {
        password += Chars[Math.floor(Math.random() * Chars.length)];
    }

    myInput.value = password;

}

btn.addEventListener("click", function () {
    generatePassword();
})