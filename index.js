let numeris1 = document.querySelector('#nr1');
let numeris2 = document.querySelector('#nr2');
let myClear = document.querySelector('#clear')
let myAdd = document.querySelector('#add');
let myDivide = document.querySelector('#divide');
let myMulti = document.querySelector('#multi');
let mySubtract = document.querySelector('#subtract');
let myModulus = document.querySelector('#modulus');
let outputas = document.querySelector('#outputas');

myAdd.addEventListener('click', mySumFunction1);
// function mySwich(operation){
//     switch (simbol){
//         case numeris1:
//         outputas.innerHTML = 'value';
//         break;
//         case myAdd:
//         outputas.innerHTML = '+';
//         break;
//         case numeris2:
//         outputas.innerHTML = 'value';
//         break;
//     }
// }
function mySumFunction1() {
    const result = Number(numeris1.value) + Number(numeris2.value);
    outputas.value = `${numeris1.value} + ${numeris2.value} = ${result}` 
};
myDivide.addEventListener('click', mySumFunction2);

function mySumFunction2() {
    const result = Number(numeris1.value) / Number(numeris2.value);
    outputas.value = `${numeris1.value} / ${numeris2.value} = ${result}`
};

myMulti.addEventListener('click', mySumFunction3);

function mySumFunction3() {
    const result = Number(numeris1.value) * Number(numeris2.value);
    outputas.value = `${numeris1.value} * ${numeris2.value} = ${result}`
};

mySubtract.addEventListener('click', mySumFunction4);

function mySumFunction4() {
    const result = Number(numeris1.value) - Number(numeris2.value);
    outputas.value = `${numeris1.value} - ${numeris2.value} = ${result}`
};

myModulus.addEventListener('click', mySumFunction5);

function mySumFunction5() {
    const result = Number(numeris1.value) % Number(numeris2.value);
    outputas.value = `${numeris1.value} % ${numeris2.value} = ${result}`
};

myClear.addEventListener('click',
function mySumFunction6(){
    result = '0';
    outputas.innerHTML = result;
    // console.log('');
    // console.log(result);

    // document.getElementById('myInputs').reset();
});
