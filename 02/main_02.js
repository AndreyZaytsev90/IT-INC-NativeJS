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

//const getNames = students.map((st) => st.name);
//console.log(getNames);

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

console.log(getNamesWithoutMethods(students));
