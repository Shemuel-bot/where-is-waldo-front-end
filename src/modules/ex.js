const ex = (x, y) => {
    const a = document.createElement('div');
    a.className = 'ex'
    a.style.position = 'absolute'
    a.style.top = `${y}px`
    a.style.left = `${x}px`
    document.querySelector('.img').appendChild(a) 
}
export default ex