
const box = (e)=>{
    const a = document.querySelector('.box');
    const b = document.createElement('div');
    const c = document.querySelector('.drop');
    const x = e.clientX - (250 / 2);
    const y = e.clientY - 100;

    if( a != null)
        a.remove();

    
    b.className = 'box';

    b.style.position = 'absolute';
    b.style.left = `${x}px`;
    b.style.top = `${y}px`;

    document.querySelector('.img').appendChild(b);
    
    c.hidden = false;
    c.style.position = 'absolute';
    c.style.left = `${x - 105}px`;
    c.style.top = y+'px';
}
export default box