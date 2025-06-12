
//this is function declaration
function print(){
    console.log("This is my function")
}
//this is function invokation/calling..............................
print()
console.log(print);
//........expresssion function...............
let printQlith=function(){
    console.log("This is the expresssion function")
}

printQlith()
console.log(printQlith)
//....................function with parameter.............................
let add=function(a,b){
    return a+b;
}
let sum=add(10,20)
console.log(sum)
//................this is arrow function declaration..................
let sub=()=>{
    console.log("This is my arrow function");
}
// console.log(sub)
sub()


//..............Higher order function............
function hof(a,b,task){
        return task(a,b)
}
let addNum=hof(10,20,(x,y)=>{
   return x+y;
})
console.log(addNum)
//count the  number of vowels in a string................method-1
function vowel(string){
    let vowels=['a','e','i','o','u'];
    let count=0;
    for (let char of string.toLowerCase()) {
        if(vowels.includes(char)){
            count++;
        }
        
    }
    return count;
}
let string="Welcome to MERN "
let vowelCount=vowel(string);
console.log(`number of vowels in"${string}":${vowelCount}`)

//count the  number of vowels in a string................method-2
// let newString=prompt("Enter some string:");
// function checkVowel(str){
//     let count=0;
//...using for loop by simple checking....
    // for(let e of newStr){
    //     if(e === "a"|| e === "e" || e === "i" || e === "o" || e ==="u"){
    //         count++;
    //     }

    // }
//...using includes method...
//     for (let e of newStr) {
//         if("aeiou".includes(e)){
//             count++;
//         }
        
//     }
//     return count;

// }
// console.log("No. of vowels are:",checkVowel(newStr))



//...foeEach()...higher order function
let arr=[1,2,3,4,5,6,7,8]
let count=0;
arr.forEach((v,idx,ar)=>{
    if(v%2==0){
        count++;
    }

})
console.log(count)
let strArr=["shhbh","kjhnjk","snjjhgv","olkjnn","mnbvn","sdadghj"]
let countstarteWithS=0
strArr.forEach((v)=>{
    if(v.startsWith("s")){
        countstarteWithS++;
    }
})
console.log("ans is:",countstarteWithS)
// arr.forEach((v,idx)=>{

//     console.log(`In index ${idx} value is :${v} array ${arr}`);
// })


//This is map method...............
let numArr=[1,2,3,4,5]

let modifiedArr=numArr.map((v)=>{
    return v+1;
})
console.log(modifiedArr)

//filter method..
let filterData=numArr.filter((v)=>{
    // if(v%2==0){
    //     return v;

    // }
    return v%2==0
})
console.log(filterData)

let sumOfNumber=numArr.reduce((accu,curr)=>{
     return accu+curr;
},0)
// console.log("Sum is: ",sumOfNumber)
let sumNum=0
for (const e of numArr) {
    sumNum+=e;
    console.log("Sum is: ",sumOfNumber)
}

let markOfStudent=[20,30,60,100,90,10,0,17]
let afterFilter=markOfStudent.filter((e)=>{
    return e>=50;
})
console.log(afterFilter)

//question-2
let n=prompt("Enter a number");
let from1ToN=[]
for(let i=1;i<=n;i++){
    from1ToN.push(i)
}
console.log( from1ToN)
let sumFrom1ToN=from1ToN.reduce((accu,curr)=>{
    return accu+curr;
})
let mulFrom1ToN=from1ToN.reduce((accu,curr)=>{
    return accu*curr;
})
console.log("Summation is:",sumFrom1ToN);
console.log("Multiplication is:",mulFrom1ToN);

