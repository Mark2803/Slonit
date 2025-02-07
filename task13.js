process.stdin.setEncoding("utf8");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b !== 0 ? a / b : "Ошибка: деление на ноль")
};

const calculate = (a, b, operation) => operations[operation]?.(a, b) ?? "Ошибка: неверная операция";

readline.question("Введите первое число: ", (num1) => {
    readline.question("Введите операцию (+, -, *, /): ", (operator) => {
        readline.question("Введите второе число: ", (num2) => {
            const result = calculate(parseFloat(num1), parseFloat(num2), operator);
            console.log(`Результат: ${result}`);
            readline.close();
        });
    });
});
