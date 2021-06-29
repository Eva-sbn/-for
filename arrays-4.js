//Task 2.4 В файле arrays-4.js создай массив с десятью элементами строкового типа. Перечисли в них известные тебе названия языков программирования.
//Ниже напиши цикл, который выводит в консоль все названия длиннее трёх символов

let array = ["html","css","java script","C++","Pathon","java","PHP","Swift","Rust"];
for(let i = 0; i < array.length; i++) {
    if(array[i].length > 3){
        console.log(array[i])
    }
};