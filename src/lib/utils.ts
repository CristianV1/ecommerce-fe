export async function fetchProducts() {
    const response = await fetch('/api/products');
    return await response.json();
  }
  
  export async function fetchOrders() {
    const response = await fetch('/api/orders');
    return await response.json();
  }