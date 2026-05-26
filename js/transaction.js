import cart, { clearCart } from "./cart.js";
import { apiFetch } from "./api.js";

export const processPayment = async () => {
  const paid = Number(
    document.getElementById("paid").value
  );

  const total = cart.reduce(
    (sum, item) =>
      sum + item.sellingPrice * item.qty,
    0
  );

  const change = paid - total;

  if (change < 0) {
    return alert("Uang kurang");
  }

  const payload = {
    items: cart.map(item => ({
      productId: item._id,
      name: item.name,
      qty: item.qty,
      price: item.sellingPrice
    })),
    total,
    paid,
    change,
    cashier: "Kasir"
  };

  await apiFetch(
    "/transactions",
    "POST",
    payload
  );

  printReceipt(payload);

  clearCart();

  alert(`Kembalian: Rp ${change}`);
};

const printReceipt = (data) => {
  const receiptWindow = window.open("", "_blank");

  receiptWindow.document.write(`
    <html>
      <head>
        <title>Struk</title>
      </head>

      <body>
        <h3>Kasirin POS</h3>

        ${data.items.map(item => `
          <p>
            ${item.name}
            ${item.qty}x
            Rp ${item.price}
          </p>
        `).join("")}

        <hr>

        <h3>Total: Rp ${data.total}</h3>

        <script>
          window.print()
        </script>

      </body>
    </html>
  `);
};
