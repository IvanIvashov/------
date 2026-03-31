/*
Дан массив ссылок: ['url1', 'url2', ...] и лимит одновременных запросов (limit)
Необходимо реализовать функцию, которая опросит урлы в том порядке, в котором они идут в массиве,
и вызовет callback c массивом ответов
['url1_answer', 'url2_answer', ...] так, чтобы в любой момент времени выполнялось не более limit
запросов (как только любой из них завершился, сразу же отправляется следующий)
Т.е. нужно реализовать шину с шириной равной limit.

Требования:
- Порядок в массиве ответов должен совпадать с порядком в массиве ссылок
Дополнительно:
- Функция должна обладать мемоизацией (один и тот же урл не опрашивать дважды)

Для опроса можно использовать fetch
Ошибки обрабатывать не нужно
*/

function parallelLimit(urls, limit, callback) {}

const db = { link1: "1", link2: "2", link3: "3", link7: "7" };
const urls = [
  "link1",
  "link2",
  "link1",
  "link3",
  "link1",
  "link2",
  "link2",
  "link7",
];
const expected = [1, 2, 1, 3, 1, 2, 2, 7];

// declare function fetch(url: string): Promise<string>;
function fetch(url) {
  console.log(`fetching: ${url}`);
  const response = db[url];

  if (response === undefined) {
    throw new Error("No such url");
  }

  return new Promise((resolve) => {
    const timeout = Math.random() * 100 + 20;
    setTimeout(() => resolve(response), timeout);
  });
}

function callOnce(fn) {
  this.called = false;

  return (...args) => {
    if (this.called) {
      throw new Error("Callback called second time");
    }

    this.called = true;

    return fn(...args);
  };
}

function test(results) {
  if (!Array.isArray(results) || results.toString() !== expected.toString()) {
    console.error(`Expected: ${expected.toString()}`);
    console.error(`Received: ${results.toString()}`);
    return;
  }

  console.log("Test passed");
}

console.clear();

parallelLimit(urls, 3, callOnce(test));
//---------------------------------------------
/**
 * Банкомат.
 *
 * В банкомате есть купюры — 50, 100, 500, 1000, 5000 руб. Номиналы купюр только такие, они не меняются
 * и доступны в константе nominals.
 * Есть ограничение на количество каждой из купюр (аргумент limits), его нужно держать в актуальном
 * состоянии (мутировать).
 * Нужно вернуть купюры и их количество, которыми можно выдать запрашиваемую сумму, в виде
 * объекта в формате, аналогичном объекту лимитов.
 * При прочих равных возможностях выдать одну и ту же сумму разными купюрами приоритет отдаётся крупным.
 * Если выдать запрашиваемую сумму не получится в принципе (сумма не кратна минимальному номиналу) —
 * выбросить ошибку 'Incorrect value'.
 * Если в банкомате недостаточно нужных купюр — выбросить ошибку 'Not enough money'.
 */

function atm(sum, limits, inputNominals) {
  // code here
}

const nominals = [5000, 1000, 500, 100, 50];

function check(sum, limits, expected) {
  let res;
  try {
    res = atm(sum, limits, nominals);
  } catch (e) {
    res = e.message;
  }
  if (typeof expected === "string") {
    console.assert(
      res.toString() === expected,
      `Expected error ${expected}, got ${res.toString()}`,
    );

    // Если ожидается что сумма равна 5000 рублей, но нет ни одной из указанных купюр,
    // то должно быть ошибка:
    // Expected result %o, got result %o, expected, res;
  } else {
    console.assert(
      JSON.stringify(res) === JSON.stringify(expected),
      `Expected result %o, got result %o`,
      expected,
      res,
    );
  }
}

function test() {
  // пример: в банкомате 9200 следующими номиналами
  const limits = { 5000: 0, 1000: 6, 500: 5, 100: 5, 50: 4 };

  // Далее последовательные выводы функции atm с одним и тем же объектом limits
  check(1250, limits, { 1000: 1, 100: 2, 50: 1 }); //
  check(100000, limits, "Not enough money"); // 'Not enough money'
  console.log("Tests finished");
}

console.clear();
test();
//----------------------------------------------------------------
// Добавьте метод times в Number.prototype.

// Требования:

// метод должен принимать callback
// внутри метода нужно получить число, на котором он был вызван, через this
// затем в цикле вызвать callback для каждого числа от 0 до this - 1
// в каждую итерацию передавать текущий индекс в callback

//----------------------------------------------------------------
// Напишите функцию sleep(duration).

// Требования:

// функция должна принимать один аргумент duration
// функция должна возвращать Promise
// этот Promise должен успешно завершаться через duration миллисекунд

// function sleep(duration) {
//   // ваш код
// }
//----------------------------------------------------------------
// Требования:

// функция должна принимать duration
// нужно вернуть Promise
// Promise должен завершиться через duration миллисекунд
// для задержки нужно использовать setTimeout

// function sleep(duration) {
//   // ваш код
// }
//----------------------------------------------------------------
// Требования:

// нужно написать декоратор callLimit
// он принимает fn, limit и необязательный callback
// должен возвращать новую функцию
// исходную функцию fn можно вызвать только limit раз
// все вызовы после достижения лимита должны игнорироваться
// в момент последнего допустимого вызова нужно вызвать callback, если он передан
// у возвращаемой функции должен быть метод reset
// метод reset должен сбрасывать счётчик вызовов
// после reset функцию снова можно вызвать limit раз

// function callLimit(fn, limit, callback) {
//   // ваш код
// }
//----------------------------------------------------------------
// Требования:

// нужно написать функцию timeLimited(fn, t)
// она должна возвращать новую асинхронную функцию
// возвращённая функция должна принимать любые аргументы и передавать их в fn
// если fn завершилась раньше, нужно вернуть её результат
// если прошло больше t миллисекунд, нужно отклонить Promise с текстом "Time Limit Exceeded"
// если fn завершилась с ошибкой раньше таймера, нужно вернуть эту ошибку

// const timeLimited = function(fn, t) {
//   return async function(...args) {
//     // ваш код
//   };
// };
//----------------------------------------------------------------
// Требования:

// функция принимает obj
// obj может быть массивом или обычным объектом
// нужно удалить все falsy-значения
// если внутри есть вложенные массивы или объекты, их тоже нужно обработать
// обработка вложенных структур должна быть рекурсивной
// для массива нужно вернуть новый массив
// для объекта нужно вернуть новый объект

// function filterFalsy(obj) {
//   // ваш код
// }
