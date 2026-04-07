/* Задание: Напишите реализацию функции query()
 *
 * Функция должна получать и преобразовывать данные.
 *
 * Необходимо валидировать следующие параметры:
 * - Запрашиваемые в fields поля должны содержаться в исходных данных
 * - В order должна передаваться функция для сортировки
 * - В groupBy должно передаваться поле для группировки
 * - Группировка реализуется внутри массива(см.пример результата)
 * - В случае передачи некорректных параметров следует выбрасывать ошибку
 * с сообщением: 'Incorrect params'
 *
 * Пример результата:
 * const result = [
 * { name: 'Anna', profession: 'scientific', age: 21 },
 * { name: 'Michael', profession: 'teacher', age: 50 },
 * { name: 'Peter', profession: 'teacher', age: 21 }
 * ];
 */

const data = [
  { name: "Michael", profession: "teacher", age: 50, maritalStatus: "single" },
  { name: "Rose", profession: "scientific", age: 19, maritalStatus: "married" },
  { name: "Anna", profession: "scientific", age: 21, maritalStatus: "married" },
  { name: "Peter", profession: "teacher", age: 21, maritalStatus: "married" },
];

async function query({
  fields = [],
  source = () => [],
  filter,
  order = null,
}) {}

async function init() {
  const result = await query({
    fields: ["name", "age", "profession"],
    source: async () => data,
    filter: (entry) => entry.age > 20,
    order: (a, b) => a.name.localeCompare(b.name),
  });

  console.log(JSON.stringify(result, null, 2));
}

init();
//-----------------------------------------------------------------
// Сделать, чтобы в прямоугольнике были цвета в нужном порядке, затем в useEffect нужно сделать нативный js, чтобы console.log был вывод цвета, по какому квадратику мы кликнули (можно использовать className)

import React from "react";
/*
_______________________
|    red  |            |
|_________|     grey   |
|    blue |            |
|_________|____________|
*/
const containerStyle = {
  width: "300px",
  height: "200px",
  border: "1px solid",
};

const redStyle = {
  backgroundColor: "red",
};

const blueStyle = {
  backgroundColor: "blue",
};

const greyStyle = {
  backgroundColor: "gray",
};

export default () => {
  React.useEffect(() => {}, []);

  return (
    <div>
      <h1>Пример</h1>
      <div style={containerStyle} class="container">
        <div class="red" style={redStyle}>
          Красный
        </div>
        <div class="blue" style={blueStyle}>
          Синий
        </div>
        <div class="grey" style={greyStyle}>
          Серый
        </div>
      </div>
    </div>
  );
};

//-------------------------------------------------------------
 // Провести ревью кода, исправить недочеты

  export default ({ queryParameter }) => {
      const [data, setData] = useState();
  
    useEffect(async () => {
         setData(await fetchDataFromServer(queryParameter));
      });
  
      return (
          <div>
              {data.map((dataElement) => <div>{dateElement}</div>)}
          </div>
     );
  }
   
  const isOdd = (num) => {
    return new Promise((resolve, reject) => setTimeout(() => resolve(num % 2), 500))
}

async function asyncFilter(array, callback) {
   
}

asyncFilter([1, 2, 3], isOdd).then(console.log)

//-------------------------------------------------------------

// Напишите React-компонент, внутри которого есть кнопка Add. При нажатии на эту кнопку каждый раз добавляется новая кнопка.
 // При нажатии на созданную кнопку — она удаляется.

import React, { useState } from 'react';

export default () => {
    const addButton = () => {
    };

    return (
        <>
            <h3>Example</h3>
            <h3>Add button challenge</h3>
            <div className="wrapper">
                <button onClick={addButton}>Add</button>
                <div className="box-wrapper">
                </div>
            </div>
        </>
    );
};
//-------------------------------------------------------------

// Напишите функцию flattenObject, которая берет вложенный объект и преобразует 
// его в плоскую карту (объект), сохраняя информацию о пути до значения в исходном объекте.
// Путь разделяется косой чертой /
/* {
    "a": 1,
    "b/c": 2,
    "b/d/e": 3,
    "f/0": 4,
    "f/1": 5,
    "f/2/g": 6
}
*/

const input = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    },
    f: [4, 5, { g: 6 }]
};

const output = flattenObject(input);
console.log(output);

function flattenObject() {
   
}

console.log(flattenObject(input));
//-------------------------------------------------------------
// Напишите функцию, которая находит максимально возможную сумму подмассива (непрерывной последовательности) в массиве целых чисел.

const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const output = 6; // Сумма подмассива [4, -1, 2, 1]

function maxSubarraySum(arr) {
}

//-------------------------------------------------------------
//Ревью, переписать , чтобы работало(здусь нужно promise, изменить структуру параметров pareString - нельзя

import xml2js from 'some-open-source-xml2js'

function parseXML(xml) {
  var result;
  xml2js.parseString(xml, function (err, data) {
    result = data;
  });
  return result;
}
