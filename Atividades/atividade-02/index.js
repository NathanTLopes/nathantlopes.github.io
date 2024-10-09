// Definindo o array de objetos com os itens do menu
const itensMenu = [
  { nome: 'Início', url: 'index.html' },
  { nome: 'Sobre', url: 'sobre.html' },
  { nome: 'Contato', url: 'contato.html' }
];

// Função responsável por criar a estrutura do menu e aplicar os estilos
function criarMenu() {
  // Cria o elemento <header>
  const header = document.createElement('header');
  
  // Estilo do cabeçalho
  header.style.backgroundColor = '#071D41';
  header.style.fontFamily = 'Arial, sans-serif';

  // Cria o elemento <nav> dentro do header
  const nav = document.createElement('nav');
  header.appendChild(nav);

  // Cria a lista não ordenada <ul> dentro do nav
  const ul = document.createElement('ul');
  nav.appendChild(ul);

  // Estilo para a lista <ul>
  ul.style.display = 'flex';
  ul.style.justifyContent = 'center';
  ul.style.alignItems = 'center';
  ul.style.height = '40px';
  ul.style.gap = '20px';
  ul.style.listStyleType = 'none'; // Remove marcadores da lista

  // Chama a função para popular o menu
  popularMenu(ul);

  // Adiciona o header ao início do body
  document.body.prepend(header);
}

// Função que percorre o array e adiciona os itens ao menu
function popularMenu(ul) {
  itensMenu.forEach(item => {
    // Cria o elemento de lista <li>
    const li = document.createElement('li');

    // Cria o link <a> dentro do <li>
    const a = document.createElement('a');
    a.textContent = item.nome;
    a.href = item.url;

    // Estilo para os links <a>
    a.style.textDecoration = 'none'; // Remove sublinhado
    a.style.color = 'white';         // Cor dos links
    a.style.textTransform = 'uppercase'; // Texto em caixa alta

    // Adiciona o link <a> dentro do <li>
    li.appendChild(a);

    // Adiciona o <li> na lista <ul>
    ul.appendChild(li);
  });
}

// Chama a função para criar o menu assim que a página carrega
window.onload = criarMenu;