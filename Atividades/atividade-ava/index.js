const itensMenu = [
    { nome: 'Início', url: 'index.html'},
    { nome: 'Sobre', url: 'sobre.html'},
    { nome: 'Contato', url: 'contato.html'}
];

const body = document.querySelector('body');
const header = document.createElement('header');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
body.prepend(header);
header.prepend(nav);
nav.prepend(ul);
body.style.background = 'red';
header.style.background = 'black';
nav.style.background =  'black';
body.style.margin = '0px';
header.style.padding = '30px';

itensMenu.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.nome;
        a.href = item.url;
        li.appendChild(a);
        ul.appendChild(li);

        a.style.color = 'white';
});

