import React from 'react';
import useCounter from './hooks/useCounter';

function App() {

  const {counter,handleIncrement,handleDecrement,handleReset  } = useCounter()


  return (
    <div className='flex justify-center items-center h-screen bg-gray-100 '>
      <div className='bg-white p-8 rounded shadow text-center' >
        <h1 className='text-2xl font-bold mb-4'>Counter: {counter}</h1>
        <div className="space-x-4">
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Increment
          </button>

          <button
            onClick={handleDecrement}
            className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
          >
            Decrement
          </button>

          <button
            onClick={handleReset}
            className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
