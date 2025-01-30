// Функция для суммирования числовых полей объекта
function sumNumericFields(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum;
}

// Функция для получения отсортированных названий числовых полей
function getSortedNumericFields(obj) {
    let numericFields = [];
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            numericFields.push([key, obj[key]]);
        }
    }
    numericFields.sort((a, b) => b[1] - a[1]);

    let result = [];
    for (let field of numericFields) {
        result.push(field[0]);
    }
    return result;
}

// Пример
const exampleObject = { name: 'Vasya', friends: 5, likes: 19, projects: 7 };
console.log(sumNumericFields(exampleObject)); // 31
console.log(getSortedNumericFields(exampleObject)); // ['likes', 'projects', 'friends']
