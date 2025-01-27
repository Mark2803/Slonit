// Функция для случайного числа
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Основная функция игры
const playGuessingGame = () => {
    const secretNumber = getRandomNumber(1, 10000); // Компьютер 1 загадывает число
    console.log(`Компьютер 1 загадал число: ${secretNumber}.`);

    let attempts = 0;
    let numbers = Array.from({ length: 10000 }, (_, i) => i + 1); // Создаём массив чисел от 1 до 100

    while (numbers.length > 0) {
        const middleIndex = Math.floor(numbers.length / 2); // Находим середину массива
        const guess = numbers[middleIndex];
        attempts++;
        console.log(`Компьютер 2: Пробую число ${guess}.`);

        if (guess === secretNumber) {
            console.log(`Компьютер 1: Угадал! Число: ${secretNumber}. Попыток: ${attempts}.`);
            break;
        }

        if (guess < secretNumber) {
            console.log(`Компьютер 1: Больше.`);
            numbers = numbers.slice(middleIndex + 1); // Оставляем только числа больше предположения
        } else {
            console.log(`Компьютер 1: Меньше.`);
            numbers = numbers.slice(0, middleIndex); // Оставляем только числа меньше предположения
        }

        console.log(`Оставшийся диапазон: [${numbers[0]} - ${numbers[numbers.length - 1]}].`);
    }
};

// Запуск игры
playGuessingGame();