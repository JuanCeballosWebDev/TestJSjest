import { add, total, highestScore, color } from './App';

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


// Unit test - only tests one thing
// test add function
test('add - if function defined?', () => {
  expect(add).toBeDefined(); 
});

// test add function
test('add - is function returning a value?', () => {
  expect(add(1, 2)).toBeDefined();
});

// test add function
test('add - verify correct return values', () => {
  expect(add(1, 2)).toBe(3); // function returns 3; toBe is a matcher (===)
  expect(add(5, 2)).toBe(7);
});

// test highestScore function
test('highest score', () => { 
  const students = [
    { name: 'Shane Carey', score: 9.5 },
    { name: 'Rebecca Mills', score: 8.7 },
    { name: 'Derek Myers', score: 9.1 },
  ];
  const result = highestScore(students);
  expect(result).toEqual({ name: 'Shane Carey', score: 9.5 });
});


// Integration test - testing a function that relies on another function (multiple things)
//  - testing add() then total() function
//  - benefit of more detailed function testing
test('total', () => {
  expect(total(5, 20)).toBe('$25');
  expect(total(2, 10)).toBe('$12');
  expect(total(8, 50)).toBe('$58');
});


// test color function
test('color - is function returning a value?', () => {
  expect(color(['amarillo', 'verde', 'azul'], 'green')).toBeDefined();
});