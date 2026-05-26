let cart = [];

export const addToCart = (product) => {
  const existing = cart.find(
    item => item._id === product._id
  );

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      ...product,
      qty: 1
    });
  }

  renderCart();
};

export const renderCart = () => {
  const container = document.getElementById("cart-items");

  container.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.sellingPrice * item.qty;

    container.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>${item.qty}x</span>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
};

export const clearCart = () => {
  cart = [];

  renderCart();
};

export default cart;
