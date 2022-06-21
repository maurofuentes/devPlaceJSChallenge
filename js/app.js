//this function receives a string parameter and returns de amount of capslock found
function cantidadMayusculas(text){
    let capsAmount = 0;

    const caps = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"

    for (let i = 0; i < text.length; i++) {
        const currentElement = text[i];

        if (caps.includes(currentElement)) {
            capsAmount+=1;
        }
        
    }
    
    return capsAmount;
}

//this function receives and array as parameter and returns a array copy with his values incremented +1
function arrayValuesIncrement(array) {
    //parse string to array
    const newArray = array.split(",");

    //new Array for int values
    const newIntArray = [];

    for (let i = 0; i < newArray.length; i++) {
        //parse to Int and add to newIntArray        
        const currentElement = parseInt(newArray[i]);
        newIntArray.push(currentElement);
    }

    //mew array to return
    const incrementedValues = [];

    for (let i = 0; i < newIntArray.length; i++) {
        //parse to Int and add to newIntArray        
        const currentElement = newIntArray[i]+1;
        incrementedValues.push(currentElement);
    }

    
    return incrementedValues;
}

//this function receives an array parameter and returns its values sorted from smallest to largest

function sortValuesMinorToLargest(stringOfNumbers){

    //parse string to array
    const newArray = stringOfNumbers.split(",");

    //new Array for int values
    const newIntArray = [];

    for (let i = 0; i < newArray.length; i++) {
        //parse to Int and add to newIntArray        
        const currentElement = parseInt(newArray[i]);
        newIntArray.push(currentElement);
    }

    newIntArray.sort(function(a, b) {
        return a - b;
    });

    return newIntArray;

}

/*** IMPLEMENTATION - EXCERCISES RESOLVED */

// EXCERCISE #1
const capsBtn = document.querySelector("#capsInputBtn");

capsBtn.addEventListener("click", ()=> {
    const inputValue = document.querySelector("#capsInput").value;
    
    const result = cantidadMayusculas(inputValue);

    const newResultDiv = document.createTextNode("Cantidad de mayúsculas encontras: " + result);

    const capsContainer = document.querySelector("#capsContainer");

    const newDiv = document.createElement("div");

    newDiv.textContent = `Cantidad de mayúsculas encontradas : ${result}`;

    const resultDiv = document.createElement("div");

    resultDiv.classList.add("fw-bold");
    resultDiv.classList.add("text-center");
    resultDiv.classList.add("mt-2");
    resultDiv.classList.add("border");
    resultDiv.classList.add("border-warning");
    resultDiv.classList.add("rounded-pill");

    resultDiv.appendChild(newDiv);

    capsContainer.appendChild(resultDiv);

});
// END - EXCERCISE #1

// EXCERCISE #2
const plusNumberInputBtn = document.querySelector("#plusNumberInputBtn");

plusNumberInputBtn.addEventListener("click", ()=> {
    const inputValue = document.querySelector("#plusNumberInput").value;
    
    const result = arrayValuesIncrement(inputValue);

    alert(`Nuevo array con valores incrementados en 1:
        ${result}`);

});

// END - EXCERCISE #2

// EXCERCISE #3
const numOrderBtn = document.querySelector("#numOrderBtn");

numOrderBtn.addEventListener("click", ()=> {
    const inputValue = document.querySelector("#numOrderInput").value;
    
    console.log(inputValue);

    const orderedArray = sortValuesMinorToLargest(inputValue);

    const stringResult = `Valores ordenados de menor a mayor: ${orderedArray.toString()}`;

    const orderedNumberDiv = document.querySelector("#orderedNumberDiv");

    const newDivResult = document.createElement("div");

    newDivResult.classList.add("fw-bold");
    newDivResult.classList.add("text-center");
    newDivResult.classList.add("mt-2");
    newDivResult.classList.add("border");
    newDivResult.classList.add("border-success");
    newDivResult.classList.add("rounded-pill");

    newDivResult.textContent = stringResult;

    orderedNumberDiv.appendChild(newDivResult);

    // alert(`Nuevo array con valores incrementados en 1:
    //     ${stringResult}`);

});

// END - EXCERCISE #3