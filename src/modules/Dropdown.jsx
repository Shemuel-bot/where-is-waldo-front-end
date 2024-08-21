import ex from './ex';
import '../css/Dropdown.css'

const submit = async (name) => {
  return fetch('http://localhost:3000/select-character', {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      minX: document.querySelector('.box').getBoundingClientRect().left - document.querySelector('.img').getBoundingClientRect().left,
      maxX: document.querySelector('.box').getBoundingClientRect().right - document.querySelector('.img').getBoundingClientRect().left,
      minY: document.querySelector('.box').getBoundingClientRect().top - document.querySelector('.img').getBoundingClientRect().top,
      maxY: document.querySelector('.box').getBoundingClientRect().bottom - document.querySelector('.img').getBoundingClientRect().top,
    }),
  }).then(async (res) => {
      const object = await res.json();
     return object.message
  }).catch(err => {console.log(err)})
  
}

function Dropdown() {


  return (
    <>
     <div className='drop' hidden>
      <button id='waldo' onClick={async () => {
        if (await submit('waldo')) {
          document.getElementById('waldo').remove();
          ex(664 + document.querySelector('.img').getBoundingClientRect().left - 10, 367 + document.querySelector('.img').getBoundingClientRect().top);
        }
      }}>waldo</button>

      <button id='wilma' onClick={async () => {
        if (await submit('wilma')) {
          document.getElementById('wilma').remove();
          ex(815 + document.querySelector('.img').getBoundingClientRect().left -10, 671 + document.querySelector('.img').getBoundingClientRect().top);
        }
      }}>wilma</button>

      <button id='odlaw' onClick={async () => {
        if (await submit('odlaw')) {
          document.getElementById('odlaw').remove();
          ex(308 + document.querySelector('.img').getBoundingClientRect().left - 10, 370 + document.querySelector('.img').getBoundingClientRect().top);
        }
      }}>odlaw</button>

      <button id='wizard' onClick={async () => {
        if (await submit('wizard')) {
          document.getElementById('wizard').remove();
          ex(784 + document.querySelector('.img').getBoundingClientRect().left - 10, 367 + document.querySelector('.img').getBoundingClientRect().top);
        }
      }}>wizard</button>
     </div>
    </>
  )
}

export default Dropdown
