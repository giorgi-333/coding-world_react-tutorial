import surati from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [ricxvi,ricxvisMinicheba] = useState(3)
  const kleba = ()=>{
    if(ricxvi > 0) {
      ricxvisMinicheba(ricxvi-1)
    }
  }

  return (
    <div className='counter-cont'>
        <button onClick={()=>{ ricxvisMinicheba(ricxvi+1) }}>გაზრდა</button>
        <div className='count'> {ricxvi} </div>
        <button onClick={kleba}>კლება</button>
    </div>
  );
}

export default App;
