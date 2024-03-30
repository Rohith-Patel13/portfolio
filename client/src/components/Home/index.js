import {useContext} from 'react'
import { MyContext } from "../MyContext/index"
import "./index.css"

const Home = () => {
  const userDetail=useContext(MyContext) 
  console.log(userDetail,"userDetail")
  const {about} = userDetail
  const {name,alternateAvatars,quote,subTitle,title} = about
  const profileImageObject=alternateAvatars[0]
  const {url} = profileImageObject
  return (
    <div className='home-bg'>
      <img src={url} alt={name} />
      <div>
      <p>{`Hi My name is ${name},I'm a ${title},${subTitle}`}</p>
      <p>{quote}</p>
      </div>  
    </div>
  )
}

export default Home
