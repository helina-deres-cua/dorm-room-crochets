//------------Class 8-----------------

// solution 3: constructor
const Note = function(id, text) {
  this.id = id; 
  this.text = text;
}

const arrayOfNodes = [];
let id = 1; 

const add1 = function(text) {
  const newId = id++; 
  const note = new Note2(text, text); 
  arrayOfNotes.push(Note);
}

//-------------------------------------

// My solution

let arrayOfNotes = [];

const add = function(text, priority) {
  arrayOfNotes.push({
    id: arrayOfNotes.length,
    text,
    priority, // low, medium, high 
    author: "Helina"
  }); 
};

const list = function() {
  arrayOfNotes.forEach(item => {
    console.log(item)
  })
};

const remove = function(id) {   // remove array (arrayOfNotes)
  arrayOfNotes = arrayOfNotes.filter(item => item.id !== id); // solution 1: filters and removes the id, but this overrides the array (inefficient) 
  arrayOfNotes.splice(index, 1); // solution 2: splice 
}; 



















/* --------------CLASS 7------------------
console.log("Hello World!"); 

// ------------Number 1--------------------
function getName (firstName, lastName) {
  firstName ="Helina";
  lastName = "Deres";

  return(firstName + lastName);
}

console.log(getName);

//--------------Number 2-------------------
const array = [1,2,3];       // create array
array.length;

function calcMean (array) {  // calc mean
  for (let i = 0; i < array.length; i++) {   // Loop through array
    sum =+ array[i]; 
  }

  const mean = sum / array.length; 
  return mean; 
}

console.log(calcMean(array)); // call function

//---------------Number 3---------------------
function printNum(num) { // declare initial state variable 
  let space = "";        // initially there's no space
  
  for (let i = 1; i < num; i++) { // iterate over array
    console.log(space + i);       // to get it in the correct format
    space = " " + space;
  }
}

printNum(5);     // call function
*/