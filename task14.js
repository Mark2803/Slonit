function myFilter(array, callback) {
    const result = []; // Новый массив для хранения отфильтрованных элементов
    for (let i = 0; i < array.length; i++) { // Проходим по каждому элементу массива
        if (callback(array[i], i, array)) { // Если колбэк возвращает true для элемента
            result.push(array[i]); // Добавляем элемент в результат
        }
    }
    return result; // Возвращаем новый массив
}

const numbers = [1, 2, 3, 4, 5];

// Используем myFilter для фильтрации четных чисел
const evenNumbers = myFilter(numbers, function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// Фильтруем числа больше 3
const greaterThanThree = myFilter(numbers, function(num) {
    return num > 3;
});
console.log(greaterThanThree); // [4, 5]
