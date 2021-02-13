// Var can be reassigned
var nameVar = 'Andrew'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

// Let can be reassigned but NOT redeclared
let nameLet = 'Jen';
nameLet = 'Julie'
console.log('nameLet', nameLet);

// Const can't be reassigned
// Should default to const, if it needs to be reassigned we can switch to let
// Don't use var
const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Var has function scoping, we get the same error when trying to access it outside as we would with const and let
// function getPetName() {
//   var petName = 'Hal';
//   return petName;
// }

// getPetName();
// console.log(petName);

// Block scoping
// fullName and firstName var are scoped to the same context, we are not using a function so they are both globally defined variables
// If we switch firstName to const or the second console.log won't work, the variable is scoped to the if statement so won't be available outside
// If we declare firstName as let outside the if and assign it inside that will work because the variable becomes globally scoped
const fullName = 'Andrew Mead';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);