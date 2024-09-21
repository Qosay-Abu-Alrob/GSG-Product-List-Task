import { products } from './data.js';

const productList = document.getElementById('product-list');
const categoryButtons = document.getElementById('category-buttons');

function renderProducts(filteredProducts) {
  productList.innerHTML = '';
  filteredProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-container');

    productDiv.innerHTML = `
      <div class="product-image-container">
        <img class="product-image" src="${product.image}" alt="${product.title}" />
      </div>
      <div class="product-details">
        <h1 class="product-title">${product.title}</h1>
        <div class="product-price">$${product.price}</div>
      </div>
    `;
    productList.appendChild(productDiv);
  });
}
const showAllButton = document.createElement('button');
showAllButton.textContent = 'All';
showAllButton.addEventListener('click', () => {
  renderProducts(products); 
});
categoryButtons.appendChild(showAllButton);

const categories = [...new Set(products.map(product => product.category))];

categories.forEach(category => {
  const button = document.createElement('button');
  button.textContent = category.toUpperCase();
  button.addEventListener('click', () => {
    const filteredProducts = products.filter(product => product.category === category);
    renderProducts(filteredProducts);
  });
  categoryButtons.appendChild(button);
});

renderProducts(products);
