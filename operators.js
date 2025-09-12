//Arthemetic operators
let x=20,y=3;

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

//Assignment operators 

let z=53;
z+=3;
console.log(z)
z*=2;
console.log(z)
z-=4;
console.log(z)
z/=2;
console.log(z)
z%=2;
console.log(z)

//comparision operators
let a=10,b="18";
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a>=b)
console.log(a<=b)

//logical operator
let age=20;
console.log(age>=20 && age<=40)
console.log(age<20||age>20)
console.log(!(age<18))

//string operators
let firstName= "names"
let lastName= "last "
let fullName=firstName+" "+lastName;

console.log(fullName)
console.log(lastName)
let correctName=`Hello ${firstName} ${lastName}, welcome to ....`;
console.log(correctName)

//ternary operators 
let myAge= 19;
if(myAge>=18){
    console.log("Eligible to vote")
}else{
    console.log("you cannot vote")
}
let result= myAge>=18?"eligible to vote":"you cannot vote"
console.log(result)

//Increment operator
let count=5;
console.log(count++)
console.log(count)
console.log(++count)

// typeof operators 
console.log(typeof count)
