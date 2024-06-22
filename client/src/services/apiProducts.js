const API_URL = "https://dummyjson.com";

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error("Failed to getting products");
  const products = await res.json();
  return products;
}

export async function getProductById(id) {
  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) throw new Error(`Couldn't find product ${id}`);
  const product = await res.json();
  return product;
}
