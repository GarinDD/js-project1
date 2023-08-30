let Myname = "Ivan";

//Myname = 6+356;

let name2;
let number = 7;
let number2 = 7.2;
let isDay = false;

let result = number+1-2*5/5;
result = number + number2;



let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}${str2}`;


console.log(result);
console.log(Myname);

//логические операции
console.log("Равенство",number == number2);
console.log("Меньше",number < number2);
console.log("Больше",number > number2);
console.log("Меньше или равно",number <= number2);
console.log("Больше или равно",number >= number2);
console.log("Не равно",number != number2);
console.log(name2);
console.log(Myname, "is", typeof Myname);


let age = prompt('Сколько тебе лет?', 100);
result = confirm("Тебе больше 18?");
alert(age);
alert(result);

let a = prompt("Укажи первое значение");
let b = prompt("Укажи второе значение");
let sum = Number(a)+Number(b);
alert("Итого:"+sum);