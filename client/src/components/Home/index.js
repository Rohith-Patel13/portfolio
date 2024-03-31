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
        <h1 className='name-intro'>Hi,this is</h1>
        <div className='name-bg'>
          <p className='name'>{name}</p>
        </div>
        <p className='jobtitle'>I'm a {title}</p>
        <p className='quote'>{quote}</p>
      </div>  
    </div>
  )
}

export default Home
