function hello(name) {
  const greeting = name
    ? `Привет, ${name}! Добро пожаловать!`
    : "Привет! Добро пожаловать!";

  console.log("Приветствие:", greeting);
  return greeting;
}

function square(num) {
  return num * num;
}

module.exports = hello;
module.exports = square;
