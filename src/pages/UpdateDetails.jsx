import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UpdateDetails = () => {
 const {id}=useParams()
 const [data, setData]= useState()
 console.log(id)

    const getdata= async()=>{
        try{
            const res= await axios.get(`http://localhost:3001/Employee/${id}`)
        console.log(res)
        setData(res.data)
    }
    catch(error){
        console.log(error.message)
    }

    }

 
   const handlechange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
   }

    const updateData=async(e)=>{
                e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:3001/Employee/${id}`,data)
                    console.log(response.data)
                    alert("Data Updated Successfully")
                    
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        getdata()
    },[])

  return (
    <>
    <div>

        <form action="" onSubmit={updateData}>

        <input type="text"  name='name' value={data?.name} onChange={handlechange}/>
        <input type="email" name='email'  value={data?.email} onChange={handlechange}/>
        <input type="text" name='post' value={data?.post} onChange={handlechange}/>
        <button type='submit'>Update</button>
    </form>
        <p>name:{data?.name}</p>
        <p>email:{data?.email}</p>
        <p>Post:{data?.post}</p>
        </div>
    </>
  )
}
