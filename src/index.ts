// const form = document.querySelector(".new-item-form") as HTMLFormElement;

// const type = document.querySelector("#type") as HTMLSelectElement;
// const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
// const details = document.querySelector("#details") as HTMLInputElement;
// const amount = document.querySelector("#amount") as HTMLInputElement;

// form.addEventListener("submit", (evento:Event)=> {
//     evento.preventDefault();
//     console.log(`${type.value.toUpperCase()} es de: ${toFrom.value} details: ${details.value} the amount is: ${amount.valueAsNumber}`);
// });

const add = (num1:number,num2:number = 10): string => {
    // console.log(num1 + num2)
    let suma: number = 0
    if(num2) {
        suma = num1 + num2
    }
    //const suma: number = num1 + num2!
    return suma.toString()
}

console.log(add(1,3))

/*

const add = (num1:number,num2:number): string => {
    // console.log(num1 + num2)
    const suma: number = num1 + num2
    return suma.toString()
}

const add = (num1:number,num2?:number): string => {
    // let suma: number = 0
    // if(num2) {
    //     suma = num1 + num2
    // }
    const suma: number = num1 + num2!
    return suma.toString()
}

console.log(add(1,3))
 */