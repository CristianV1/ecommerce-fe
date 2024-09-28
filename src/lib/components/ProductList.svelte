<script>
    export let products = [];
  </script>
  
  <ul>
    {#each products as product}
      <li>{product.name} - ${product.price}</li>
    {/each}
  </ul>