import { useEffect, useState } from 'react'
import box from './modules/box'
import Dropdown from './modules/Dropdown'
import './App.css'


function App() {
  const [a, setA] = useState(0);
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(true);

  
  useEffect(() => {
    let intervalId;
    if(document.querySelectorAll('button').length === 0)
        setIsRunning(false);

    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const seconds = Math.floor((time % 6000) / 100);

  return (
    < >
      
     <div className='img' onClick={ function (e){ 
      if(a!=1){
        box(e);
        setA(a+1);
      }
      else{
        document.querySelector('.box').remove();
        document.querySelector('.drop').hidden = true; 
        setA(0)
      }
      } }>
        <h1>Timer: {seconds}</h1>
      <Dropdown />
     </div>
    </>
  )
}

export default App
