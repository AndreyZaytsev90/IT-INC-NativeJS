//Объекты:
// -object - ссылочный тип данных
// -array
// -function

const str = "ANDREY"; // new String() - ф-я конструктор

str.toLowerCase(); // - создается временный объект, после достичения результата, он разрушается
console.log(str.toLowerCase());

const obj = {}; // === new Object()  (obj ссылка на объект в памяти)
const obj2 = obj; // переменная ссылается на тот же объект в памяти

const obj3 = {};

console.log({} === {}); //false

//CRUD
//create, read, update, delete

const fm = ["Olga", "Petr"];

const user = {
  name: "Andrey",
  age: 33,
  family: fm,
};

const copyUser = {
  name: user.name,
  age: user.name,
  family: [...user.family],
};

const copyUser2 = { ...user }; // копия через деструктуризацию
console.log(copyUser2);

const newUser = structuredClone(user);

const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100,
  },
];

const newStudent = {
  name: "Olga",
  age: 35,
  isMarried: true,
  scores: 85,
};

const updatedStudents = [...students, newStudent]; // раскукожили старый массив, положили в конец новый объект и закрыли [] с обеих сторон

//const updatedStudents2 = [];
//for (let i = 0; i < students.length; i++) {
//  updatedStudents2.push(students[i]);
//}
//updatedStudents2.push();

const filterUpdatedStudents = students.filter((st) => st.scores === 85);

const newStudents = [...students, { ...students[0], isMarried: true }];
