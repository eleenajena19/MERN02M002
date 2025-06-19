console.log("Today's Topic FetchAPI")

//callback hell
// function getData(userId,next){
//     setTimeout(()=>{
//         console.log("User Id: ",userId)
//         next();
//     },3000)
// }
// getData(12)
// 
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5);
//             })
//         })
//     })
// });

//promises
// function getData(userId){
    
//        return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("User Id: ",userId)
//             resolve("Resolved")
//              },3000)
//         })      
// }

// console.log(getData(1));

// let promise =new promise((res,rej)=>{
//     setTimeout(()=>{
//         // res("success")
//         rej("error")
//     },3000)
// })
// console.log(promise)


// promises
// function getData(userId){
    
//        return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("User Id: ",userId)
//             resolve("Resolved")
//             // reject("Something missing")
//              },3000)
//         })      
// }
//How to handle a promise
//ans: then or catch block
// getData(1).then(()=>{
//     return getData(2).then(()=>{
//         return getData(3).then((res)=>{
//     console.log("result:",res)
        
//         })
//     })
// }).catch((err)=>{
//     console.log("Error is:",err)
// })

//async--used to create a block as asynchronous await--a keyword is used to wait for the execution of line

async function getData() {
    
let response=await fetch(`https://jsonplaceholder.typicode.com/posts`)
let data=await response.json()
console.log(data[0].title)

data.forEach(element=>{
    console.log(element.title)
});

}
getData()
