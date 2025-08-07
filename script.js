const form = document.getElementById('search-form');
const container = document.getElementById('lista-produtos');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const pageInfo = document.getElementById('page-info');

let currentPage = 1;
let currentQuery = '';
let currentSort = 'LOWEST_PRICE';

function buscarProdutos(query, sortBy, page = 1) {
  const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${encodeURIComponent(query)}&page=${page}&country=BR&sort_by=${sortBy}&product_condition=ALL&is_prime=false&deals_and_discounts=NONE`;

  container.innerHTML = 'Carregando produtos...';
  pageInfo.textContent = `Página ${page}`;

  fetch(url, apiOptions)
    .then(response => response.json())
    .then(data => {
      const produtos = data.data?.products || [];
      container.innerHTML = '';

      if (produtos.length === 0) {
        container.innerHTML = 'Nenhum produto encontrado.';
        return;
      }

      produtos.forEach(produto => {
        const card = document.createElement("div");
        card.className = "produto";
        card.innerHTML = `
          <img src="${produto.product_photo}" alt="${produto.product_title}">
          <div class="titulo">${produto.product_title}</div>
          <div class="preco">${produto.product_price}</div>
          <a class="link" href="${produto.product_url}" target="_blank">Ver na Amazon</a>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
      container.innerHTML = 'Erro ao buscar produtos.';
    });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  currentQuery = document.getElementById('query').value.trim();
  currentSort = document.getElementById('sort').value;
  currentPage = 1;
  buscarProdutos(currentQuery, currentSort, currentPage);
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    buscarProdutos(currentQuery, currentSort, currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  currentPage++;
  buscarProdutos(currentQuery, currentSort, currentPage);
});
