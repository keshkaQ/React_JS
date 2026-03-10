const hello = require("./utils/message");
const os = require("os");
const path = require("path");
const fs = require("fs");
const { Chalk } = require("chalk");
const square = require("./utils/message");
const chalk = new Chalk();

console.log(chalk.blue("\nСвой модуль (message)"));
hello();
console.log("Квадрат числа 3 равен " ,square(3));

console.log(chalk.cyan.bold("\nВерсия Node.js"));
console.log(chalk.green(process.version));

console.log(chalk.cyan.bold("\nДата и время"));
console.log(chalk.yellow(new Date().toLocaleString("ru-RU")));

console.log(chalk.cyan.bold("\nТекущая директория"));
console.log(chalk.white(__dirname));

console.log(chalk.blue.bold("\nOS (модуль os)"));
console.log(chalk.gray("ОС:") + chalk.white.bold(os.type()));
console.log(chalk.gray("Домашняя папка:") + chalk.white.bold(os.homedir()));
console.log(chalk.gray("Имя компьютера:") + chalk.white.bold(os.hostname()));

console.log(chalk.blue.bold("\nФайл (модуль path)"));
console.log(
  chalk.gray("Имя файла:") + chalk.green.bold(path.basename(__filename)),
);
console.log(
  chalk.gray("Расширение:") + chalk.yellow.bold(path.extname(__filename)),
);
console.log(chalk.gray("Папка файла:") + chalk.white(path.dirname(__filename)));
