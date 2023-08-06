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

//const names = ["Bob", "Alex", "Nick", "John"];
//const updatedStudents = [{
//  name: "Bob",
//  age: 22,
//  isMarried: true,
//    scores: 85,
//    isStudent: true
//  },]

//const getNames = students.map((st) => st.name);
//console.log(getNames);

//Функции-преобразователи:
const getValueForResult = (el) => el.name;
const addNewProperty = (el) => ({ ...el, isStudent: true });

const getNamesWithoutMethods = (array) => {
  const result = [];
  const getValueForResult = (el) => el.name;
  for (let index = 0; index < array.length; index++) {
    //result[index] = array[index].name
    //result.push(array[index].name);
    result[index] = getValueForResult(array[index]);
  }
  return result;
};

const getUpdatedStudents = (array) => {
  let result = [];
  const addNewProperty = (el) => ({ ...el, isStudent: true });
  for (let index = 0; index < array.length; index++) {
    //  result[index] = { ...array[index], isStudent: true };
    result[index] = addNewProperty(array[index]);
  }
  return result;
};

const getMappedArray = (array, func) => {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    result[index] = func(array[index]);
  }
  return result;
};

const getFilteredArray = (array, funcCond) => {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    if (funcCond(array[index]) === true) {
      result[result.length] = array[index];
    }
  }
  return result;
};

const pushElToArray = (array, el) => {
  array[array.length] = el;
  return array.length;
};

const isIncludes = (array, el) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === el) {
      return true;
    }
  }
  return false;
};

const findEl = (array, searchCondFunc) => {
  for (let index = 0; index < array.length; index++) {
    if (searchCondFunc(array[index]) === true) {
      return array[index];
    }
  }
  return false;
};

console.log(getNamesWithoutMethods(students));
console.log(getUpdatedStudents(students));
console.log(getMappedArray(students, getValueForResult));
console.log(getMappedArray(students, addNewProperty));

console.log(students.map(getValueForResult));
console.log(students.map(addNewProperty));
//console.log(students.map((el) => el.name));

console.log(getFilteredArray(students, (el) => el.age > 20));
console.log(students.filter((el) => el.age > 20));

console.log(findEl(students, (el) => el.name === "Bob"));

const arr = new Array(); // []
const arr1 = new Array(3); // [ , , ]
const arr2 = new Array(1, 2, 3); // [1,2,3]
