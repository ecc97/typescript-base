"use strict";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    console.log(`${type.value.toUpperCase()} es de: ${toFrom.value} details: ${details.value} the amount is: ${amount.valueAsNumber}`);
});
