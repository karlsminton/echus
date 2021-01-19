<script>
	import { onMount } from "svelte"

	export let id
	export let product

	if (id) {
		let url = 'http://127.0.0.1:8080/products/' + id

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
			product = res
		})
	}
</script>

<main>
	{#if product}
    	<h1 class="text-4xl my-6">{product.name}</h1>
	    <form action="{url}" method="POST">
	    	<input type="hidden" name="id"/>
	    	<input type="text" name="name"/>
	    	<input type="text" name="price"/>
	    	<input type="text" name="sku"/>
	    	<input type="submit" />
	    </form>
	{/if}
</main>
