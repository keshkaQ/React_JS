const fs = require("fs");

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Ошибка при чтении файла", err);
    return;
  }
  const lines = data.split("\n");
  console.log("Количество строк в файле: ",lines.length);
  console.log("Содержимое файла: \n", data);
});
