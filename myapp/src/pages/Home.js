import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [data, setData] = useState([])

  const handleSubmit = async () => {
    let data = {
      name: name,
      email: email,
      phone: phone
    }
    try {
      const response = await axios.post('http://localhost:5000/api/add-user', data)
      console.log(response.data)
      setName('')
      setEmail('')
      setPhone('')

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/get-users')
        setData(response.data.users)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }

    , [])

  return (
    <div className=' container mx-auto'>
      <div className='mt-10'>
        <input value={name} onChange={(e) => setName(e.target.value)} className='p-2 mx-2 border-[1px] rounded-md' type='text' name='name' placeholder='Name' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 mx-2 border-[1px] rounded-md' type='text' name='email' placeholder='Email' />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} className='p-2 mx-2 border-[1px] rounded-md' type='text' name='phone' placeholder='Phone' />
      </div>
      <button onClick={handleSubmit} className='p-2 mt-2 bg-blue-500 text-white rounded-md'>Submit</button>


      {
        data.map((user) => {
          return (
            <div key={user._id} className='mt-5'>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home
