function createLogger() {
    const logs = []; // Массив для хранения сообщений, доступен только внутри функции

    return {
        log: function(message) {
            logs.push(message); // Добавляем сообщение в массив
        },
        getLogs: function() {
            return [...logs]; // Возвращаем копию массива, чтобы внешний код не мог его изменять
        }
    };
}

// Пример использования
const logger = createLogger();
logger.log("Message 1");
logger.log("Message 2");
console.log(logger.getLogs()); // ["Message 1", "Message 2"]
