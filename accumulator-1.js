// Task 3.1 В файле accumulator-1.js создай массив с десятью элементами числового типа.
//Создай переменную accumulator и собери в ней сумму всех элементов массива.

let arrays = [23,12,3,56,7,31,8,10,9,5];

let accumulator = 0;
for(i = 0; i < arrays.length; i++) {
 accumulator += arrays[i]
};

console.log(accumulator);