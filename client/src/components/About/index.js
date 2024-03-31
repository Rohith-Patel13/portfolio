import { useContext } from 'react'
import { MyContext } from '../MyContext/index'

import "./index.css"

const About = () => {

  const userDetail = useContext(MyContext)
  const {about} = userDetail
  const {address,description,exp_year,some_total,subTitle} = about
  return (
    <div className='about-bg'>
      <h1>About Me</h1>
      <p>
        I'm from {address}.{subTitle}.{description}
      </p>
      <button type='button'>{some_total}+ Projects</button>
      <button>{exp_year}+ Years Experience</button>
    </div>
  )
}

export default About
