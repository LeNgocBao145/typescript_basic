// 1. static type
let userName = 'LeNgocBao';
console.log(typeof userName);

//This will show error because TypeScript is a 
// statically typed language
// userName = 18;
// console.log(typeof userName);

// 2. any type
let userAge;
userAge = 18;
// userAge = '18';

console.log(typeof userAge);

// 3. ALl basic types in TypeScript
let isStudent: boolean;
let studentName: string;
let studentAge: number;

studentName = 'LeNgocBao';
studentAge = 18;
isStudent = true;