function createRandomGenerator(min, max) {
    return function() {
        return Math.floor(Math.random() * (max - min + 1)) + min; // Генерация случайного числа в диапазоне [min, max]
    };
}

// Пример использования
const randomGenerator = createRandomGenerator(1, 100);

console.log(randomGenerator()); // Генерирует случайное число от 1 до 100
console.log(randomGenerator()); // Генерирует следующее случайное число от 1 до 100
