<script>
	import { Router, link } from "svelte-routing"
	export let product
</script>

<div class="px-5 py-5">
	<Router>
		<a href="http://127.0.0.1:5000/product/{product.id}" use:link>
			<img src="" alt="product image"/>
			<p>{product.name} - <span class="text-xs text-gray-700">{product.sku}</span></p>
			<!-- #todo: Convert Currency symbol to config-based system -->
			<p class="text-xs text-gray-700">${product.price}</p>
		</a>
	</Router>
</div>

<style></style>