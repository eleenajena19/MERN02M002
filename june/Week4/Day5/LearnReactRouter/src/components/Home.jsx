import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
    let navigate=useNavigate()

    function handleClick(){
        navigate('/about')
    }
  return (
    <div>
      <h1>This is my home Page
      <button onClick={handleClick}>Go to About Page</button>
      </h1>
    </div>
  )
}

export default Home
