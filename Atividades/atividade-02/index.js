const body = document.querySelector('body');
const ancora = document.createElement('a');
ancora.setAttribute('href', 'https://www.ifro.edu.br');
ancora.textContent = 'IFRO';
ancora.style.color = '#f00';
ancora.style.textDecoration = 'none';
ancora.style.fontWeight = 'bold';
ancora.style.fontSize = '20px';

body.appendChild(ancora);

const titulo = document.querySelector('h1');
titulo.remove();



const linha = document.createElement('li');
const linha2 = document.createElement('li');
const linha3 = document.createElement('li');

linha.textContent = 'item-1';
linha2.textContent = 'item-2';
linha3.textContent = 'item-3';


const lista = document.createElement('ul');
lista.appendChild(linha);
lista.appendChild(linha2);
lista.appendChild(linha3);

body.appendChild(lista);