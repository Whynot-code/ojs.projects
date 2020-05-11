import checkCardNumber from './checkCardNumber';

const btn = document.querySelector("button");
const div = document.querySelector("#wynik")

btn.addEventListener("click", () => {
    const input = document.querySelector("input")
    if (input.value) {
        div.textContent = `${checkCardNumber(input.value)}`
        input.value = ""

    }

console.log(checkCardNumber(378282246310005))
console.log(checkCardNumber(371449635398431))
console.log(checkCardNumber(378734493671000))
console.log(checkCardNumber(30569309025904))
console.log(checkCardNumber(6011111111111117))
console.log(checkCardNumber(6011000990139424))
console.log(checkCardNumber(3530111333300000))
console.log(checkCardNumber(3566002020360505))
console.log(checkCardNumber(2221000000000009))
console.log(checkCardNumber(2223000048400011))
console.log(checkCardNumber(2223016768739313))
console.log(checkCardNumber(5555555555554444))
console.log(checkCardNumber(5105105105105100))
console.log(checkCardNumber(4111111111111111))
console.log(checkCardNumber(4012888888881881))
console.log(checkCardNumber(4222222222222))