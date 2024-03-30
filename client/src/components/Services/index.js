import {useEffect} from 'react'
import axios from 'axios'
import "./index.css"

const Services = () => {

    useEffect(() => {
    const fetchData = async ()=>{
        const fetchedDataValue = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
        const {data} = fetchedDataValue
        const {user} = data
        const {services} = user
        console.log(services,"services")
    }
    fetchData()
  }, [])    

  return (
    <div>
      <h1>Services</h1>
    </div>
  )
}

export default Services
