let arrObj = [
  {
    id: 1,
    text: "Do assignment",
    isCompleted: false
  },
  {
    id: 2,
    text: "Take a break",
    isCompleted: false
  },
  {
    id: 3,
    text: "Eat",
    isCompleted: false
  },
  {
    id: 4,
    text: "Go to sleep",
    isCompleted: true
  }
];

let arrTwo = [...arrObj];
let arrThree = [...arrTwo];
let temporaryTodos = [];


export const todos = () => arrObj;

export const addTodo = (text, idNum) => {

  arrTwo.push({
    id: idNum,
    text: text,
    isCompleted: false
  });
  
  return arrTwo;
};


export function eraseTodo(id) {
  
  
  for (let i = 0; i < arrTwo.length; i++)
  {
    if (arrTwo[i].id !== id) temporaryTodos.push(arrTwo[i]);
  }
  
  return temporaryTodos;
};


export function update(id, text) {

  for (let i = 0; i < arrThree.length; i++)
  {
    if (arrThree[i].id === id) arrThree[i].text= text;
  }

  return arrThree;
};


