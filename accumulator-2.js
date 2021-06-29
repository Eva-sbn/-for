// Task 3.2 В файле accumulator-2.js создай массив с десятью элементами числового типа. Три числа должны быть меньше нуля.
//Создай переменную accumulator и собери в ней сумму всех положительных элементов массива.

let arr = [12,-8,3,-7,23,14,6,13,-5,8];
let accumulator = 0;
for(i = 0; i < arr.length; i++) {
    if(arr[i] >= 0) {
        accumulator += arr[i]
        console.log(accumulator)
    }
};