import { useContext } from 'react'
import { MyContext } from '../MyContext/index'

import "./index.css"

const Services = () => {

  const userDetail = useContext(MyContext)
  console.log(userDetail,"userDetail")  

  return (
    <div>
      <h1>Services</h1>
    </div>
  )
}

export default Services
