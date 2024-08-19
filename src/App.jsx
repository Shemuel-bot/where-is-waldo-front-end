import { useEffect, useState } from 'react'
import box from './modules/box'
import Dropdown from './modules/Dropdown'
import './App.css'


function App() {
  const [a, setA] = useState(0);

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
      <Dropdown />
     </div>
    </>
  )
}

export default App
