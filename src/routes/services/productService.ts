let baseUrl = "http://localhost:8082";

export async function getProducts() {
  const res = await fetch(`${baseUrl}/products`);
  const products = await res.json();
  return new Response(JSON.stringify(products), { headers: { 'Content-Type': 'application/json' } });
}

export async function getProductById(id:number) {
  const res = await fetch(`${baseUrl}/products/${id}`);
  const product = await res.json();
  return new Response(JSON.stringify(product), { headers: { 'Content-Type': 'application/json' } });
}
