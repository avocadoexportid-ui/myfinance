import { loadProducts } from "./product.js";
import { processPayment } from "./transaction.js";
import { clearCart } from "./cart.js";

loadProducts();

document
  .getElementById("pay-btn")
  .addEventListener("click", processPayment);

document
  .getElementById("cancel-btn")
  .addEventListener("click", clearCart);

document.addEventListener("keydown", (e) => {

  if (e.key === "F2") {
    e.preventDefault();

    processPayment();
  }

  if (e.key === "F3") {
    e.preventDefault();

    clearCart();
  }
});
