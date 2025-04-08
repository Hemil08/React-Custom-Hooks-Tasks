import { useState,useEffect } from 'react';
import './App.css';
import useDebounce from './hooks/useDebounce';

function App() {

  const [searchTerm,setSearchTerm] = useState('')
  const debounceSearchTerm = useDebounce(searchTerm,500)

  const handleChange = (e) =>{
    setSearchTerm(e.target.value)
  }
 
  return (
    <div className="App">
      <input type='text' value={searchTerm} onChange={handleChange} placeholder='Search...'/>
      
          <p>Debounce Value: {debounceSearchTerm}</p>

    </div>
  );
}

export default App;
