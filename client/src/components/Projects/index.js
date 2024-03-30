import {useContext} from 'react'
import { MyContext } from '../MyContext/index'

import "./index.css"

const Projects = () => {

   

  const userDetail = useContext(MyContext)
  console.log(userDetail,"userDetail") 

  return (
    <div>
      <h1>Projects</h1>
    </div>
  )
}

export default Projects
