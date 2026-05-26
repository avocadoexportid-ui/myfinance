import { apiFetch } from "./api.js";
import { addToCart } from "./cart.js";

export const loadProducts = async () => {
  const products = await apiFetch("/products");

  const container =
    document.getElementById("product-list");

  container.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");

    div.className = "product-card";

    div.innerHTML = `
      <h4>${product.name}</h4>
      <p>Rp ${product.sellingPrice}</p>
    `;

    div.onclick = () => addToCart(product);

    container.appendChild(div);
  });
};
