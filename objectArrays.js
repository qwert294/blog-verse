let person={
    name:"Prem Sagar",
    age:20
}
console.log(person.name)
console.log(person["age"])

const{name,age}=person;//destructuring assignment 
console.log(name)

let games=["apple","banana","pineapple"]
console.log(games[0])
let numb=[1,2,3,4,5]
let square=numb.map((num)=>num*num); //transform each element 
console.log(square)

let evens=numb.filter((num)=>num%2==0)//filter values
console.log(evens)

let sum=numb.reduce((present,num)=>present+num)
console.log(sum)

let persons=[{  name:"patan nagu",age:12,marks:50},{name:"kova bava", age:35,marks:40},{name:"pavan pamu",age:2,marks:2}]
console.log(persons[0].marks)

let max=0;
let tpr="";
for(let person of persons){
    if(person.marks>max){
        max=person.marks;
        tpr=person.name;
    }
}console.log(`tpr is ${tpr} and he got ${max}`)
