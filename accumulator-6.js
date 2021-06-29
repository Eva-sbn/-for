// Task 3.6 В файле accumulator-6.js создай массив с десятью элементами числового типа.
//Создай переменную accumulatorOdd и собери в ней нечетные числа массива.

let arr = [2,5,4,12,8,9,6,34,10,7];
let accumulator = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 != 0) {
        accumulator.push(arr[i])
    }
};
console.log(accumulator);


// Task  4.1
//Напиши функцию, которая принимает массив из чисел и возвращает сумму его элементов.
let sum = 0;
function learnLanguage(a) {
  for(let i = 0; i < a.length; i++) {
      sum += a[i]
  }
      return sum
};
console.log(learnLanguage([3,4,5,7]))


//Task 4.2
//Напиши функцию, которая принимает массив из чисел и возвращает сумму только положительных элементов.
let sum2 = 0;
function getSumPositive(b) {
    for(let i = 0; i < b.length; i++) {
    if(b[i] >= 0) {
        sum2 += b[i]
    }

    }
    return sum2
}
console.log(getSumPositive([4,7,-9,3,-3]));


//Task адача 4.3
//Напиши функцию, которая принимает массив из названий языков программирования.
// Она должна возвращает названия тех элементов, длина которых больше трёх символов.


const arr = [];
function programmingLanguages(c) {
 for(let i = 0; i < c.length; i++) {
     if(c[i].length > 3) {
     arr.push(c[i])
     }
    }
    return arr 
 }

console.log(programmingLanguages(["html","css","java script","C++","Pathon","java","PHP","Swift","Rust"]));


// Task 4.4
//Напиши функцию, которая принимает массив из имен. Функция должна вернуть новый массив с именами, которые начинаются либо на "а" либо на "у".
let names = [];
function getNames(d) {
    for(let i = 0; i < d.length; i++) {
        if(d[i][0] === "А" || d[i[0]] === "У") {
            names.push(d[i])
        }
    }
    return names
}
console.log(getNames(["Адам","Магомед-Башир","Султан","Рамзан","Аслан","Альви","Ахмад","Мухаммад","Салман","Седа"]));





// Task 4.5
//Допиши функцию deleteMessages так, чтобы она вовзращала новый массив, из которого удалены все объекты с ключами deleted равными true.

function deleteMessages(array){
    let sum = []
    for(let i = 0; i < array.length; i++) {
        if(array[i].deleted !== true){
            sum.push(array[i]) 
     }
  }
     return sum
}
  
  
  const messages = [
   { text: 'hello', deleted: true },
   { text: 'bue', deleted: false },
   { text: 'js is a beauty', deleted: false },
   { text: 'pair programming', deleted: true },
   { text: 'this is my horse', deleted: false },
  ];
  
  console.log(deleteMessages(messages));

  
