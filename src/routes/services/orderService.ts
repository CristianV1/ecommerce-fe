let baseUrl = "http://localhost:8082";


export async function getOrders() {
  const res = await fetch(`${baseUrl}/order`);
  const products = await res.json();
  return new Response(JSON.stringify(products), { headers: { 'Content-Type': 'application/json' } });
}

export async function getOrderById(id:number) {
  const res = await fetch(`${baseUrl}/order/${id}`);
  const product = await res.json();
  return new Response(JSON.stringify(product), { headers: { 'Content-Type': 'application/json' } });
}
