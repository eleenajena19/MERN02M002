console.log("Event Handling")

// let button=document.getElementById("btn")
// console.log(button)

// button.onclick=()=>{
//     alert("button clicked")
//     button.style.background="red"
// }

// button.onkeyup=()=>{
//     console.log("Key pressed")
// }

// let callback=()=>{
//     console.log("button clicked")
// }
// button.addEventListener("click",callback)

// button.removeEventListener("click",callback)

let color="light"

GamepadButton.addEventListener("click",()=>{
    if(color==="light"){
        console.log(color)
        document.body.style.background="black"
        color="dark"
    }else{
        console.log(color)
        document.body.style.background="white"
        color="light"
    }
})