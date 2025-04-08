import { useState } from 'react'
import useForm from '../hooks/useForm'

const Form = () => {

    const {formData,handleInputChange,handleSubmit} = useForm(
        {username:"",
        password:"",
        },
        (formData) => console.dir(formData)
    )

    const {username,password} = formData;

  return (
    <form onSubmit={handleSubmit}>
            <label htmlFor="">Username:-</label>
            <input 
                type="text"
                name="username"
                value={username}
                onChange={handleInputChange}
                className='mb-3'
            />
            <br/>
            <label htmlFor="password" >Password:-</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                className='mb-3'
            />
            <br />
            <button type="submit">Submit</button>
        </form>

  )
}

export default Form