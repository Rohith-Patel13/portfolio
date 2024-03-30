import { useContext } from 'react'
import { MyContext } from '../MyContext/index'

import "./index.css"

const About = () => {

  const userDetail = useContext(MyContext)
  console.log(userDetail,"userDetail")
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default About
