    <script>
        export let data;
        export let products = data ? data.products : [];
    </script>
  
  <main>
    <h1>Products</h1>
    {console.log(data)}
    {#if products.length > 0}
      <ul>
        {#each products as product}
          <li>
            <a href={`/products/${product.id}`}>{product.name}</a> - ${product.price}
          </li>
        {/each}
      </ul>
    {:else}
      <p>No products found.</p>
    {/if}
  </main>