/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let arr1 =[1, 2, 3];

let arr2 = arr1;

// want to add item to arr2//
arr2.push(4)
console.log("Second array:" , arr2);
console.log("first array:" , arr1);

// Copying an array
let arr3 =[4, 5, 6];
let arr4 = [...arr3];

// ...   spread the arr4 from arr3 so no change in arr3//
arr2.push(7)
console.log("third array:" , arr3);
console.log("forth array:" , arr1);


// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = { ...obj1, d: 4};
console.log("first object", obj1);
console.log("second object", obj2);

// if i want to change obj1 //
let obj3 = {
    ...obj1, b:5
}
console.log("third object", obj3);


// Copying only part of an array/object

let arr5 = [...arr1, {...obj1}, ...arr3, "x", "z", "y" ]
console.log(arr5);
