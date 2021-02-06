<script>
	import { onMount } from "svelte"

	export let id
	export let product
	export let defaultCart = {items:{}}

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

	function addToCart() {
		let session = Cookies.get('session')
		if (session === undefined) {
			Cookies.set('session', JSON.stringify(defaultCart))
			session = Cookies.get('session')
		}
		session = JSON.parse(session)
		if (session.items[product.sku] === undefined) {
			session.items[product.sku] = 1
		} else {
			session.items[product.sku] += 1
		}
		console.log(session)
		Cookies.set('session', JSON.stringify(session))
	}
</script>

<main>
	{#if product}
    	<h1 class="text-4xl my-6">{product.name}</h1>
	    <div>
	    	<p><b>{product.name}</b></p>
	    	<p>{product.sku}</p>
	    	<p>${product.price}</p>
		</div>
		<button on:click={addToCart}>Add To Basket</button>
	{/if}
</main>
