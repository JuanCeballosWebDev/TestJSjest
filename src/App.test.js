import { todos, addTodo, eraseTodo, update } from './App';

// https://jestjs.io/docs/expect#expectvalue
// The expect function is used every time you want to test a value.

/*
  toBe compares two values for equality.
      https://jestjs.io/docs/expect#tobevalue
  toBeNull matches only null
      https://jestjs.io/docs/expect#tobenull
  toBeUndefined matches only undefined
      https://jestjs.io/docs/expect#tobeundefined
  toBeDefined is the opposite of toBeUndefined
      https://jestjs.io/docs/expect#tobedefined
  toBeTruthy matches anything that an if statement treats as true
      https://jestjs.io/docs/expect#tobetruthy
  toBeFalsy matches anything that an if statement treats as false
      https://jestjs.io/docs/expect#tobefalsy
*/


// test todos function
test('Outputs array of objects -exist, returns a value, and returns the correct value', () => {
  const expectOne = [
    { id: 1, text: 'Do assignment', isCompleted: false },
    { id: 2, text: 'Take a break', isCompleted: false },
    { id: 3, text: 'Eat', isCompleted: false },
    { id: 4, text: 'Go to sleep', isCompleted: true }
  ];
  expect(todos()).toBeDefined();
  expect(todos()).toEqual(expectOne);
});


describe('arrayContaining', () => {
  const expectedTwo = [{ id: 5, text: 'Study again', isCompleted: false }];
  
  it('Adds object to array -exist, returns a value, and returns the correct value', () => {
    expect(addTodo('Study again', 5)).toEqual(expect.arrayContaining(expectedTwo));
    expect(addTodo('Do excercise', 5)).toBeDefined();
  });
});

describe('not.arrayContaining', () => {
  const expected = [{ id: 4, text: 'Go to sleep', isCompleted: true }];

  it('Erases object from array -exist, returns a value, and returns the correct value', () => {
    expect(eraseTodo(4)).toEqual(expect.not.arrayContaining(expected),);
    expect(eraseTodo(4)).toBeDefined();
  });
});

// test update function
test('Updates and array of objects -exist, returns a value, and returns the correct value', () => {
  const arrObjTwo = [
    { id: 1, text: 'Do assignment', isCompleted: false },
    { id: 2, text: 'Take a break', isCompleted: false },
    { id: 3, text: 'Play', isCompleted: false },
    { id: 4, text: 'Go to sleep', isCompleted: true }
  ]
  expect(update(3, 'Play')).toEqual(arrObjTwo);
  expect(update(3, 'Play')).toBeDefined();
});

