//Operator
//Arithmetic operator

let a=5;
let b=30;
console.log(a+b); //35
console.log(a-b); //-25
console.log(a*b); //150
console.log(a/b); //0.66

console.log(a%2); //1
console.log(a**b); //25

console.log(a++); //5
console.log(++a); //7

console.log(a--); 
console.log(--a);

console.log(b--); 
console.log(b);
console.log(--b);

console.log("string"+30);
console.log(20+30+"string");
console.log(true+"string");
console.log(+"text");
console.log(+"60");
console.log(typeof+"text");
console.log(typeof true);
console.log(typeof typeof+"text");
console.log(+true); //1
console.log("20"+ +"30"*2); //2060
console.log("20" +"30"); //2030
console.log(+ +"60");

let c=40;
c+=2;       // c=a+2;
console.log(c);
c-=3;
console.log(c);

let st1="xyz";
let st2="xyz";
console.log(st1==st2);
console.log(st1===st2);

let n1="20";
 let n2=20;   // let n2="20";
 //normal comparision
console.log(n1==n2)
//strict comparision
console.log(n1===n2)

let e="2";
console.log(2 != 2);

let is="true";
console.log(is != true)

// let 1="2";
// console.log(1 +3)


let f=3;
console.log((2<4) && (f++<5))
console.log(f)

console.log(!false)