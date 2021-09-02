## Array Iteration & Nested Objects

#### Arrays
- Iterator Methods
  - forEach
  - map
  - filter
  - find
  - includes
  - reduce




#### Objects
- Object . vs [] operator 



##### Example of a more complex array to mess around with

``````
let arrayOfObjects = [
  {
    name: "Greg", 
    city: "Providence",
    age: 20,
    pets: [
      {name: "Chuck", animal: "Chipmunk"},
      {name: "Spike", animal: "Dog"},
    ]
  },
  {
    name: "Kim", 
    city: "Westport",
    age: 25,
    pets: [
     {name: "Slim", animal: "Snake"},
      {name: "Foxy", animal: "Fox"},
    ]
  },
  {
    name: "Eva", 
    city: "Honolulu",
    age: 30,
    pets: [
      {name: "Dumbo", animal: "Eliphant"},
      {name: "Kia", animal: "Dog"},
    ]
  },
  {
    name: "Amelia", 
    city: "Bozeman",
    age: 35,
    pets: [
      {name: "Lala", animal: "Lion"},
      {name: "Tara", animal: "Tiger"},
    ]
  },
  {
    name: "Riley", 
    city: "San Diego",
    age: 60,
    pets: [
      {name: "Night", animal: "Owl"},
     {name: "Sam", animal: "Dog"},
    ]
  }
]

``````

##### Example of a more complex Object to mess around with

``````
let personObj = {
     name: "Greg", 
     city: "Providence",
     age: 20,
     pets: [
       {name: "Chuck", animal: "Chipmunk", attributes: ["kind", "fluffy", "Sleepy"]},
       {name: "Spike", animal: "Dog", attributes: ["kind", "slobery", "wet"]},
     ]
  }
  
  ``````
