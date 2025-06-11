// console.log("Hello array")
// let a=20;
// console.log("The value is:",a+1)
// console.log(`The value of a is: ${a+2}`)

// const obj={
//     name:"xyz"
// }
//     console.log(obj.name);
//     obj.name="y";
//     console.log(obj.name)

    let str="Welcome";
//     console.log(str[1])
//     str[0]="D"
//     console.log(str);
//     console.log(str.length);

//     const newstr=str.toLowerCase();
//     console.log(newstr);
//     console.log(str.toLowerCase())
//     console.log(str.toUpperCase())

//     console.log("After Trim",str.trim().length);
//     console.log("Here Trim not applicable..",str.length);

//     console.log(str.charAt(0))
//     console.log(str.concat("Qlith").concat(" Innovation"));
//     const newString=str.replace("W","D");
//     console.log(newString);

//     console.log(str.slice(0,6));
//     console.log(str.slice(2));
//     console.log(str.slice(-2));
//     console.log(str.slice(4,4));
    
// const userName=prompt("Enter your name");
// console.log("".concat("@").concat(userName).concat(userName.length));

console.log(str.substring(0,3));

//Arrays...............

let starr=["Swiss","Raashi","Swatika","Qlith","Ishita","Ruhani"];
console.log(starr[0])
for (const e of starr) {
    console.log(e)
}
//Average of numbers in a array
let numArr=[2,3,4,5,6,7];
// console.log(numArr[0])
// let sum=0;
// for (const e of numArr) {
//     sum=sum+e;
   
// }
//  console.log(sum/(numArr.length));
// ................
 let arr2=[1,2,3,4,5];
 let arr3=[6,7,8]
 arr2.push(6,7,"mkjh",true);
 console.log(arr2);
 arr2.pop();
 console.log(arr2);

 console.log(arr2.toString());
 console.log(arr2.concat(arr3));

 arr2.unshift(0);
 console.log(arr2)
 arr2.shift();
 console.log(arr2);

 console.log(arr2.splice(-2))
console.log("Hello")
 arr2.pop()
 console.log(arr2)
 arr2.splice(1,2,10)
 console.log(arr2)
 arr2.splice(4,1)
 console.log(arr2)

 console.log(arr2.includes(10));
 console.log(arr2.reverse())
 

 let comArr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
 comArr.shift();
 console.log(comArr);
 comArr.splice(1,1,"Ola")
 console.log(comArr)
 comArr.push("Amazon")
 console.log(comArr)

