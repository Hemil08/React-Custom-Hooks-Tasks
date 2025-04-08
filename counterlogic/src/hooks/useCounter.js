import {useState} from 'react'

const useCounter = () =>{
    const [counter,setCounter] = useState(0)

    const handleIncrement = () => setCounter((prev) => prev + 1)
    const handleDecrement = () => setCounter((prev) => (prev<1 ? prev : prev-1))
    const handleReset = () => setCounter (0)

    return {counter,setCounter,handleIncrement,handleDecrement,handleReset}
}

export default useCounter