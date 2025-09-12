let marks=45;
if(marks>=90){
    console.log("A+ grade")

}else if(marks>=80){
    console.log("A")
}else if(marks>=70){
    console.log("B")
}else{
    console.log("fail")
}
 
let day=3
switch(day){
    case 1: console.log("monday")
    break;
    case 2: console.log("tuesday")
    break;
    case 3: console.log("wednesday")
    break;
    default: console.log("empty")    
}

let k=1;
do{
    console.log("iteration:",k);
    k++;

}while(k<=5);
let colors=["red","blue","green"]
for(let i=0;i<colors.length;i++){
    console.log(colors[i])
}

let person= {
    name:"wer",
    age:19,
    college:"JNTUGV"
}
for(let key in person){
    console.log(`${key}:${person[key]}`)
}
for(let i=5;i>0;i--){
    if(i==3){
        continue;

    }else if(i==2){
        break;
    }
    console.log(i)
}
