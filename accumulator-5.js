// Task 3.5 В файле accumulator-5.js создай массив с десятью элементами числового типа.
//Создай переменную accumulatorEven и собери в ней четные числа массива.

let arr = [2,5,4,12,8,9,6,34,10,7];

let accumulator = [];
for(let i = 0; i < arr.length; i++) {
    if(arr[i]%2 === 0) {
        accumulator.push(arr[i])
    }
}
console.log(accumulator);