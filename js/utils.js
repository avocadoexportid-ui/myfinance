export const saveOfflineTransaction = (
  transaction
) => {
  const transactions =
    JSON.parse(
      localStorage.getItem(
        "offline_transactions"
      )
    ) || [];

  transactions.push(transaction);

  localStorage.setItem(
    "offline_transactions",
    JSON.stringify(transactions)
  );
};

export const syncOfflineTransactions =
  async () => {

    const transactions =
      JSON.parse(
        localStorage.getItem(
          "offline_transactions"
        )
      ) || [];

    for (const trx of transactions) {
      await fetch(
        "http://localhost:5000/api/transactions",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify(trx)
        }
      );
    }

    localStorage.removeItem(
      "offline_transactions"
    );
  };
