const BASE_URL = "http://localhost:5000/api";

export const apiFetch = async (
  endpoint,
  method = "GET",
  body = null
) => {
  const token = localStorage.getItem("token");

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    options
  );

  return response.json();
};
