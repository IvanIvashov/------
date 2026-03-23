// ЗАДАЧИ на THIS

// Задача 1: потеря контекста
const obj = {
  name: "Анна",
  greet() {
    console.log("Привет, " + this.name);
  },
};
const greetFn = obj.greet;
greetFn(); //  что выведет? Почему?

// Задача 3: bind
const user = { name: "Иван" };
function sayHi() {
  console.log(this.name);
}
const bound = sayHi.bind(user);
bound(); //

// Задача 4: стрелочная функция
const group = {
  name: "Группа",
  members: ["Анна", "Иван"],
  show: function () {
    this.members.forEach(() => {
      console.log(this.name);
    });
  },
};
group.show(); //

// Задача 5: call/apply
function introduce(city) {
  console.log(`${this.name} из ${city}`);
}
const person = { name: "Мария" };
introduce.call(person, "Москва"); //
introduce.apply(person, ["СПб"]); //

// РАЗНЫЕ ЗАДАЧИ (сложнее для восприятия, работа с объектами)
// =============================================
// 1. Подсчёт слов
// Напиши функцию wordCount(text) —
// принимает строку, возвращает объект где
// ключ — слово, значение — количество вхождений
// =============================================

const text = "кот пёс кот кот пёс лиса";

function wordCount(text) {
  // твой код
}

console.log(wordCount(text));
// → { кот: 3, пёс: 2, лиса: 1 }

// =============================================
// 2. Инвертировать объект
// Напиши функцию objReverse(obj) —
// меняет ключи и значения местами
// =============================================

const obj1 = { a: 1, b: 2, c: 3 };

function objReverse(obj) {
  // твой код
}

console.log(objReverse(obj1));
// → { 1: "a", 2: "b", 3: "c" }

// =============================================
// 3. Глубокий merge двух объектов
// Напиши функцию objMerge(obj1, obj2) —
// объединяет два объекта, вложенные объекты
// тоже мержит рекурсивно
// =============================================

const a = { x: 1, info: { age: 20, city: "Москва" } };
const b = { y: 2, info: { age: 25, name: "Иван" } };

function objMerge(obj1, obj2) {
  // твой код
}

console.log(objMerge(a, b));
// → { x: 1, y: 2, info: { age: 25, city: "Москва", name: "Иван" } }

// =============================================
// 4. Сгруппировать транзакции
// Напиши функцию sumByType(transactions) —
// принимает массив транзакций, возвращает
// объект с суммой по каждому типу
// =============================================

const transactions = [
  { id: 1, type: "income", amount: 100 },
  { id: 2, type: "expense", amount: 50 },
  { id: 3, type: "income", amount: 200 },
  { id: 4, type: "expense", amount: 30 },
];

function sumByType(transactions) {
  // твой код
}

console.log(sumByType(transactions));
// → { income: 300, expense: 80 }

// =============================================
// 5. Найти дубликаты
// Напиши функцию findDuplicates(arr) —
// возвращает массив элементов, которые
// встречаются больше одного раза
// =============================================

const arr = [1, 2, 3, 2, 4, 3, 5];

function findDuplicates(arr) {
  // твой код
}

console.log(findDuplicates(arr));
// → [2, 3]

// =============================================
// 6. Flatten вложенного объекта
// Напиши функцию flatten(obj) —
// разворачивает вложенный объект в плоский,
// используя точку как разделитель ключей
// =============================================

const obj2 = { a: 1, b: { c: 2, d: { e: 3 } } };

function flatten(obj) {
  // твой код
}

console.log(flatten(obj2));
// → { "a": 1, "b.c": 2, "b.d.e": 3 }

// =============================================
// 7. Индексировать массив по полю
// Напиши функцию indexBy(arr, key) —
// принимает массив объектов и название поля,
// возвращает объект где ключ — значение этого поля
// =============================================

const users = [
  { id: 1, name: "Анна" },
  { id: 2, name: "Петр" },
  { id: 3, name: "Мария" },
];

function indexBy(arr, key) {
  // твой код
}

console.log(indexBy(users, "id"));
// → { 1: { id: 1, name: "Анна" }, 2: { id: 2, name: "Петр" }, 3: { id: 3, name: "Мария" } }
