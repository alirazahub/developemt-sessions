import React, { useState } from 'react'
import Card from '../components/Card'
import TopBar from '../components/common/TopBar'
import { IoHome } from "react-icons/io5";
import { MdOutlineAddHomeWork } from "react-icons/md";
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState()

  const handleFetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/new")
      setData(response.data.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=' container mx-auto'>


      <div className='flex justify-center items-center cursor-pointer bg-black text-white' onClick={handleFetchData}>
        Click Me
      </div>
      {data}
    </div>
  )
}

export default Home
