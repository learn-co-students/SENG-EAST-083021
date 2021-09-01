
// Debugging Checklist
  // Check Outputs
  // Check Inputs
  // Step Through Logic


// Functions Declaration
function takesThreeArgs(arg1, arg2, arg3){
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
  
  return "hello"
}

// Arrow Function
const takesTwoArgs = (arg1, arg2) => {
  console.log("inside Function");
}

// Function Expression
const takesOneArg = function(arg1){
  console.log("inside Function");
}



function addThree(num) {
  return num + 3 
}

const arr = [1,2,4,5,6]

arr.map(num =>  num + 3)  // returns a new array with modifies values. The array is always the same size as the original 
arr.filter(num =>  num > 3) // Returns a new array typically smaller then the original. If the expression returns true the element gets added to a brand new array.
arr.find(num =>  num === 3) // Returns the first element (not an array like map and filter) that matches the expression

arr.map(addThree) 

// addThree(100) => addThree would not be considered a higher order function here
// addThree(takesOneArg) => addThree is higher order functions beacause we pass in a function




function addNumbers(passedNum) {
 
  return function(innPass){
    return passedNum + innPass
  }
}


const addFour = addNumbers(4)
const addTen = addNumbers(10)
const addTwenty = addNumbers(20)



// addFour(100)
// addTen(100)
// addTwenty(100)
