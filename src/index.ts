// const form = document.querySelector(".new-item-form") as HTMLFormElement;

// const type = document.querySelector("#type") as HTMLSelectElement;
// const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
// const details = document.querySelector("#details") as HTMLInputElement;
// const amount = document.querySelector("#amount") as HTMLInputElement;

// form.addEventListener("submit", (evento:Event)=> {
//     evento.preventDefault();
//     console.log(`${type.value.toUpperCase()} es de: ${toFrom.value} details: ${details.value} the amount is: ${amount.valueAsNumber}`);
// });

const inputs = document.querySelectorAll("input")
inputs.forEach((input) => {
    console.log(input)
})