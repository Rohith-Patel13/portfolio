import { useContext } from 'react'
import { MyContext } from '../MyContext/index'

import "./index.css"

const Skills = () => {

  const userDetail = useContext(MyContext)
  console.log(userDetail,"userDetail")  

  return (
    <div>
      <h1>Skills</h1>
    </div>
  )
}

export default Skills
