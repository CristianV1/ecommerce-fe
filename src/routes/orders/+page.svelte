<script context="module">
    export async function load({ fetch }) {
      const res = await fetch('/api/orders');
      const orders = await res.json();
      return { orders };
    }
  </script>
  
  <script>
    export let orders = [];
  </script>
  
  <main>
    <h1>Orders</h1>
  
    {#if orders.length > 0}
      <ul>
        {#each orders as order}
          <li>Order ID: {order.id}, Date: {order.orderDate}</li>
        {/each}
      </ul>
    {:else}
      <p>No orders found.</p>
    {/if}
  </main>
  