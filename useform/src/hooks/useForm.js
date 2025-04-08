import  {useState} from 'react'

const useForm = (intialState={},onSubmit) => {
  
    const [formData,setFormData] = useState(intialState)


    const handleInputChange = (e) =>{
        setFormData(({...formData,[e.target.name]:e.target.value }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        onSubmit?.(formData)
    }

    return {formData,handleInputChange,handleSubmit}
}

export default useForm