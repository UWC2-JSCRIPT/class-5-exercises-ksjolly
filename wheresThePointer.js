// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const showXY = function(e) {
    const td = this.getElementsByTagName('td')[0];
    console.log(td);
    const x = e.pageX;
    const y = e.pageY;
    td.innerHTML = `x: ${x} y: ${y}`;
}
const body = document.getElementsByTagName('body');
body[0].addEventListener('click', showXY);
// suns.forEach(sun => sun.style.color = 'orange'); addEventListener('click', showXY)
// tdList.forEach(td => td.style.color ='red');