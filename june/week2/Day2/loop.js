console.log("Hello Qlith Innovation")

console.log(1 != 1);
console.log(1 !== "1");
//let is="true"
console.log(true !== "true");
console.log("2"-1)
console.log("a"-1)
console.log("10" -"4"-"3"-2+5);
console.log("10" -"4"-"3"-2+"5");

let a=2;
let b=a++;
console.log(a,b);

console.log(0 == "")

console.log(0 === "")
console.log(!!false);
console.log(!!"false");
console.log(!!"");
//if statement
// let age=30;
// if(age>=18){
//     console.log("He/She can now vote")
// }
//
let age=15;
if(age>=18){
    console.log("He/She can now vote");
}
else{
    console.log("He/She can not  vote");
}

let stMark=40;
if(stMark>=90){
    console.log("Grade A");
}
else if(stMark>=80){
    console.log("Grade B");
}
else if(stMark>=60){
    console.log("Grade C");

}
else{
    console.log("Fail")
}
//Ternary Operator

let stage=40;
console.log(stage>=18 ? "can vote" : "can't vote");

//get user to a number using prompt("enter a number.") check if the number is multiple of 5 or not
// let num=prompt("Enter a number");
// if(num%5==0){
//     console.log(num+"Number is divisble by 5");
// }
// else{
//     console.log(num+"Number is not divisble by 5")
// }


//  let no=prompt("Enter a number");
//  if(no%2==0) {
//     console.log("Number is even")
//  } 
//  else{
//     console.log("Number is odd");
//  } 

 //loops
 //1. while loop
 //2. for loop
 //3. do-while loop

// for(let i=1;i<=10;i++){
//     console.log(i);
// }
console.log("This is while loop")
let i=1;
while(i<=5){
    console.log(i);
    i++;
}
console.log("This is do-while loop")
let n=1;
do{
    console.log(n)
    n++;

}while(n<=15);


//object
let obj={
    name:"xyz",
    age:30,
    phone:89776779,
    email:"eleena20@gamil.com"
}
console.log(obj.name)
console.log(obj.age)
console.log(obj["email"])
obj.name="y"
console.log(obj["phone"])
console.log(obj.name)

let arr=[1,2,3,4,5,6]
// console.log(typeof arr)
// console.log(typeof obj)

//for-in loop
for (const key in obj) {
    console.log(obj[key])
    
}

for (let idx in arr) {
    console.log(arr[idx])
}

//for-of
for (const e of arr) {
    console.log(e)
}

// for (const e of obj) {
//     console.log(e)
// }

let str="Qlith Innovation"
console.log("length is:", str.length)
console.log(str[0])

str[0]="D"
console.log(str)
//Interpollation of string
let c=20;
console.log("value is:",(c+1))
console.log(`Value is: ${c}+1`)