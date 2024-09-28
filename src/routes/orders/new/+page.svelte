<script context="module">
    export async function load({ fetch }) {
      const res = await fetch('/api/products');
      const products = await res.json();
      return { products };
    }
  </script>
  
  <script>
    let selectedProducts = [];
    let products = [];
  
    async function createOrder() {
      const res = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify({
          customerId: 1, // Example customer
          productIds: selectedProducts
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (res.ok) {
        alert('Order created successfully!');
      }
    }
  </script>
  
  <main>
    <h1>Create New Order</h1>
  
    <ul>
      {#each products as product}
        <li>
          <input type="checkbox" bind:group={selectedProducts} value={product.id} />
          {product.name} - ${product.price}
        </li>
      {/each}
    </ul>
  
    <button on:click={createOrder}>Submit Order</button>
  </main>
  