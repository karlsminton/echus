<script>
	export let product
</script>

<div class="px-5 py-5">
	<a href="http://127.0.0.1:5000/product/{product.id}">
		<img src="" alt="product image"/>
		<p>{product.name} - <span class="text-xs text-gray-700">{product.sku}</span></p>
		<p class="text-xs text-gray-700">{product.price}</p>
	</a>
</div>

<style></style>