import React, { useState } from 'react'
import axios from 'axios'
export const AddEmployee = () => {
    const [form, setForm]=useState({
        name:"",
        email:"",
        post:"",
    })

    const handlevalue = (e) =>{
        console.log(e)
      const name= e.target.name
      const value = e.target.value
        setForm({...form,[name]:value})


    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
            try {
                const postdata =await axios.post("http://localhost:3001/Employee",form)
                console.log(postdata.data)
                alert("Data Added")
            } catch (error) {
                console.log(error)
            }
    }



  return (
    <>
    <div>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" name='name' onChange={handlevalue} />
        <input type="email" name='email' onChange={handlevalue}/>
        <input type="text" name='post' onChange={handlevalue}/>
        <button onClick={handleSubmit}>Post</button>
        </form>
    </div>
    </>
  )
}
