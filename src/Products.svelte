<script>
	import { onMount } from "svelte"
	import Product from "./Product.svelte"

	let products
	let url = 'http://127.0.0.1:8080/products'

	let params = {
		method: 'GET',
		mode: 'cors',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}

	onMount(async () => {
		const res = await fetch(url, params).then(response => response.json())
		products = res
	})
</script>

<products>
	{#if products}
		<div class="w-4/5 max-w-8xl mx-auto">
			<ul>
				{#each products as product}
					<li class="w-1/4 float-left">
						<Product {product} />
					</li>
				{/each}
			</ul>
		</div>
	{:else}
		<p>No products available at this time.</p>
	{/if}
</products>

<style>
</style>