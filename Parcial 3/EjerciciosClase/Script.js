let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let tex = document.getElementById("TextArea");

function TheBiggestNumber(){
    let numbers = []
    while (true) {
        let number = Number.parseInt(prompt("Ingresa un numero"));
        if (!isNaN(number)) {
            numbers.push(number);
        }
        else{
            break;
        }
    }
    let biggestNumber = Math.max(...numbers);
    tex.innerText = "este es el numero mas grande " + biggestNumber;
}

function isPalindromo() {
    let word = prompt("Ingresa una palabra");
    word = word.toLowerCase().replace(/\s/g, "");
  
    let isPalindromo =  word === word.split("").reverse().join("");

    if (isPalindromo) {
        tex.innerText = word + " es palindromo";
    }
    else{
        tex.innerText = word + " no es palindromo";
    }
  }

  function numberPlusNumber (){
    let numbers = []
    while (true) {
        let number = Number.parseInt(prompt("Ingresa un numero"));
        if (!isNaN(number)) {
            numbers.push(number);
        }
        else{
            break;
        }
    }
    let count = 0;
    numbers.forEach(number => {
        count = count + number 
    }
    );
    tex.innerText = "El resultado de la suma de todos los numero ingresados es " + count;
  }

  function generateRandorNumber(){
    let randomNumber;
        let min = Number.parseInt(prompt("Ingresa el rango minimo"));
        let max = Number.parseInt(prompt("Ingresa el rango maximo"));
        if (!isNaN(min) && !isNaN(max) ) {
            randomNumber =Math.floor(Math.random() * (max - min + 1)) + min;
        }
    tex.innerText = "tu numero random generado es " + randomNumber
  }

  function sequenceFibonachi() {
    let number = Number.parseInt(prompt("Ingresa el numero que quieras sacar en la secuencia fibonachi"));
    let sequence = [0, 1]; 
  
    while (sequence[sequence.length - 1] < number) {
      let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextNumber);
    }
  
    if (sequence[sequence.length - 1] > number) {
      sequence.pop();
    }
    tex.innerText = sequence;

  }