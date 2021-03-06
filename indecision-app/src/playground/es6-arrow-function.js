function square(x) {
  return x * x;
}

// With arrow functions we don't need to use the word function and syntax is far more succinct
// Can use implicit return and remove the parentheses if only one param (this doesn't always work but great for functions as simple as this)
// There is no way to define a named function like we do with the function above, need to use a variable, all arrow functions are anonymous
const squareArrow = x => x * x;

console.log(square(8))
console.log(squareArrow(8))

const getFirstName = (fullName) => {
  return fullName.split(' ')[0];
}

console.log(getFirstName('Mike Smith'));

const getFirstNameArrow = fullName => fullName.split(' ')[0];

console.log(getFirstNameArrow('Mike Smith'));