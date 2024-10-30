const p = document.querySelector('#paragrafo');
const divImg = document.querySelector('#divImg');
p.onclick = () => {
    alert('Parágrafo clicado!!!!!!!!!!!!')
}

//divImg.addEventListener('click', () => {
//    divImg.style.border = '2px solid black';
//})

function pMouse () {
    divImg.style.border = '2px solid black';
}
function sMouse () {
    divImg.style.border = 'none';
}
divImg.addEventListener('mouseover', pMouse);
divImg.addEventListener('mouseout', sMouse);

function clique(){
    console.log('Botão clicado!!!!!!!!!!')
    alert('Botão clicado!!!!!!!!!!!!!')
}
