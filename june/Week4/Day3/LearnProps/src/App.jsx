

import './App.css'
import Home from './components/Home'

function App(props) {
  
let a=10
let str="xyz"
let obj={
  name: "xy",
  age :20,
  email :"xy@gmail.com"

}
let arr=[1,3,4,6]

  return (
    <>
    <h2>Hello to React</h2>
    <Home a={a} str={str} obj={obj} arr={arr} />
   </>
  )
}

export default App
