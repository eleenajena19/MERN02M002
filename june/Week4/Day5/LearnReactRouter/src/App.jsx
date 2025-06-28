// import { BrowserRouter, Routes, Route } from "react-router";
import { Route, Routes } from 'react-router'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Service from './components/Service'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import FetchId from './components/FetchId'

function App() {


  return (
    <>
    <strong>Welcome to React Router</strong>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/byId/:id' element={<FetchId/>}></Route>
    </Routes>
      {/* <h1>Hello</h1> */}
    </>
  )
}

export default App
