import { useState } from 'react';
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [value,setValue] = useState('')

  const {getItem,setItem,removeItem} = useLocalStorage('value');

  return (
    <div className="App">
      <h1>useLocalStorage</h1>
      <input
        type='text'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
      />
      <button onClick={()=> setItem(value)}>Set</button>
      <button onClick={()=>console.log(getItem())}>Get</button>
      <button onClick={removeItem}>Remove</button>
    </div>
  );
}

export default App;
