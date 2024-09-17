// arrays 

let Names = ["Zahid","Khattak","Farhan","Khan"];

console.log(Names);

console.log('The value in the index 3 = ',Names[3]);

// numbers array 

let numbers = [2,3,4,5,6];

console.log(numbers);

console.log('The value in the index 3 in the numbers array = ',numbers[2]);


// change the values by index

Names[0]= "Zahid Khattak";
console.log('changing the name at index 1', Names);

Names[1]=5;

console.log(Names);

// heterogeneous array or mixed array in javascript

let user1 = ["Zahid",474,"Bs Computer Science","3.20 CGPA"];

console.log(user1);

console.log(typeof(user1));

// Push to an array

Names.push("Yasir");

console.log(Names);

// pop from an array

Names.pop();

console.log(Names);

// length method

console.log(Names.length);