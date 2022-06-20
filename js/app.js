function cantidadMayusculas(text){
    let capsAmount = 0;

    const caps = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"

    for (let i = 0; i < text.length; i++) {
        const currentElement = text[i];

        if (caps.includes(currentElement)) {
            capsAmount+=1;
        }
        
    }

    console.log(capsAmount);
    return capsAmount;
}

function arrayValuesIncrement(array) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i]+1;
        newArray.push(currentElement);
    }

    console.log(newArray);
    return newArray;
}

cantidadMayusculas("TeXXXTo");
arrayValuesIncrement([1,2,3,4,5,7]);
