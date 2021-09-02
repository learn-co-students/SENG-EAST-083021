const nameArray = ["Greg", "Kim", "Tim", "Robin", "Wade"]
const numArray = [1,2,3,4,5]


// Always returns undefined.
// forEach is most comonly used when we are just calling "side effects" operations with each element
// NOTE: forEach like many of our iterator methods actually passes in more values then we might typically use
let forEachReturn = nameArray.forEach((name, i, array) => { 
  sendEamilToUser(name) // a 'side effect' called on each element by forEach

  return "Super Sweet Return Value"
})

// => undefined

// ------------------------------------------MAP--------------------------------------------------
// returns a new array of the exact same size as the original array
// Whatever our inner logic returns is what will be in the newly created array.
// Note if we do not return anything from the inner logic we will get a bunch of our undefined values in our new array
let mapReturn = nameArray.map((name) => { 
  if (name === "Greg") {
    return `${name}!!!`
  }else {
    return name
  }
})
// => ["Greg!!!", "Kim", "Tim", "Robin", "Wade"]
let mapReturn = nameArray.map((name) => { 
  if (name === "Greg") {
    return `${name}!!!`
  }
})
// => ["Greg!!!", undefined, undefined, undefined, undefined]
let mapReturn = nameArray.map((name) => { 
  return 2
})
// => [2, 2, 2, 2, 2]


// ------------------------------------------FILTER--------------------------------------------------
// returns an new array typically smaller than that original array
// Inner logic is based entirly off of boolean logic. If the return value is true then the element gets put into the new array.
let filterReturn = nameArray.filter((name) => { 
  return name.includes('i')
})
// => ["Kim", "Tim", "Robin"]

let filterReturn = nameArray.filter((name) => { 
  return "YUUP" // remember that strings have boolean values "YUUUP" actually is truthy
})
// => ["Greg", "Kim", "Tim", "Robin", "Wade"]

let filterReturn = nameArray.filter((name) => { 
  return name === "Andy" // no match in the array. Restult still returns and array it is just empty
})
// => []




// ------------------------------------------FIND--------------------------------------------------
// returns whatever datatype the element we are looking for happens to be
// only returns the first element that matches logic
let findReturn = nameArray.find((name) => { 
  return name === "Greg"
})


// ------------------------------------------INCLUDES------------------------------------------------
// returns a boolean true of false
// does not need to take a callback. lookes to see if a specific value exists in an array.
let includesReturn = nameArray.includes("Greg")


// -----------------------------------------REDUCE---------------------------------------------------
// reduces a bunch of values into a single element/value
// There is always an accumulator as the first argument and then the current element we are iterating over as the seconed argument
let reduceReturn = numArray.reduce((acc, el) => { 
  return acc + el 
}, 0)



// -------------------------------------NESTED OBJECTS----------------------------------------------

// NOTE: When working with nested objects always double check what datatype you are currently working with - string, array, object etc...

// you can use dot notation whenever you have access directly to a key name 
//     example: personObj.name or personObj.age

// you need to use bracket notation whenever you are computing a key value or using a variable that represents a key
//     examples: personObj["na" + "me"]   or  personObj[someVariable]


// let personObj = {
//   name: "Greg", 
//   city: "Providence",
//   age: 20,
//   pets: [
//     {name: "Chuck", animal: "Chipmunk", attributes: ["kind", "fluffy", "Sleepy"]},
//     {name: "Spike", animal: "Dog", attributes: ["kind", "slobery", "wet"]}
//   ]
// }















