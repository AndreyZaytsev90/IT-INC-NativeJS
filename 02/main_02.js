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

console.log(getNamesWithoutMethods(students));
console.log(getUpdatedStudents(students));
console.log(getMappedArray(students, getValueForResult));
console.log(getMappedArray(students, addNewProperty));
