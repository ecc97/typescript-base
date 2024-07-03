"use strict";
// const form = document.querySelector(".new-item-form") as HTMLFormElement;
// const type = document.querySelector("#type") as HTMLSelectElement;
// const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
// const details = document.querySelector("#details") as HTMLInputElement;
// const amount = document.querySelector("#amount") as HTMLInputElement;
// form.addEventListener("submit", (evento:Event)=> {
//     evento.preventDefault();
//     console.log(`${type.value.toUpperCase()} es de: ${toFrom.value} details: ${details.value} the amount is: ${amount.valueAsNumber}`);
// });
let names = ["mario", "luigi", "yoshi"];
names.push("peach");
console.log(names);
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);
let numbers2 = [1, 2, 3, 4];
numbers2.push("30");
console.log(numbers2);
let user = {
    firstName: "Sao",
    lastName: "Parra",
    age: 25
};
user = {
    firstName: "Mario",
    lastName: "Bros",
    age: 80
};
console.log(user.firstName.length);
