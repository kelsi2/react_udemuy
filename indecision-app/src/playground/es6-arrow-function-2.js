// Arguments object - no longer bound with arrow functions
// In es5 functions we can access the list of arguments regardless of whether they're listed as params (e.g. if we pass in another arg when function is called, that will be listed in arguments)
// When using arrow function we get an error arguments not defined because they aren't bound

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(add(55, 1));

// This keyword - no longer bound with arrow functions
// In es5 function method we can use this just like any other class method

const user = {
  name: 'Kelsi',
  cities: ['Kelowna', 'Vancouver', 'Burnaby'],
  // Map works very similar to forEach, it will loop over each item in the given array (cities)
  // Using map we are transforming each item and creating a new array (whereas forEach just allows us to do something with that item, nothing new is created)
  // this.cities is not affected by map
  printPlacesLived () {
    return this.cities.map((city) => this.name + ' has lived in ' + city)

    // If we use function this causes an error, 'this' is not bound within this function so name is undefined
    // If we use an arrow function it will create its own this context so the function will work correctly
    // For the same reason we don't want to use an arrow function for the initial method definition because we will lose access to 'this' from the class
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // })
  }
}

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number)
  }
}

console.log(multiplier.multiply());