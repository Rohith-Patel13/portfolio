import {useContext} from 'react'
import { MyContext } from "../MyContext/index"
import "./index.css"

const Home = () => {
  const userDetail=useContext(MyContext) 
  console.log(userDetail,"userDetail")
  const {about} = userDetail
  const {name,alternateAvatars,quote,title} = about
  const profileImageObject=alternateAvatars[0]
  const {url} = profileImageObject
  return (
    <div className='home-bg'>
      <img src={url} alt={name} className='my-image' />
      <div>
      <p>{`Hi,this is ${name}.I'm a ${title}`}</p>
      <p>{quote}</p>
      </div>  
    </div>
  )
}

export default Home
