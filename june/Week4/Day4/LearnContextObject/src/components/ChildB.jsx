import React, { useContext } from 'react'
import { nameContext } from '../App'

function ChildB() {

    let obj=useContext(nameContext);
  return (
    <div>
        {/* Name is:{name} */}
        {/* Object values are:{obj} <br/> */}
        {/* Name is:{obj.name}<br/>
        age is:{obj.age}<br/>
        Array is:{obj.arr} */}



        <br/>
      This is childB
    </div>
  )
}

export default ChildB
