<script>
	import { onMount } from "svelte"

	export let id
	export let product
	export let url

	let name
	let price
	let sku

	if (id) {
		console.log(id)
		url = 'http://127.0.0.1:8080/products/' + id

		let getparams = {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}

		onMount(async () => {
			const res = await fetch(url, getparams).then(response => response.json())
			product = res
			name = product.name
			price = product.price
			sku = product.sku
		})
	}

	let putparams = {
		method: 'PUT',
		mode: 'cors',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}

	// async function validateAndPost() {
	// 	console.log('Hit validate and post')
	// 	response = await fetch(url, putparams).then(res => res.json())
	// 	console.log(response.ok)
	// }

	let validateAndPost = (async () => {
		console.log('Hit validate and post')
		const response = await fetch(url, putparams).then(res => res.json()).catch(err => {
      		console.log(err.response.data);
    	});
		console.log(response.ok)


	})
</script>

<main>
	{#if product}
    	<h1 class="text-4xl my-6">{product.name}</h1>
	    <form on:submit|preventDefault={validateAndPost}>
	    	<input type="hidden" name="id" value="{product.id}">
	    	<div>
	    		<label>Name</label>
	    		<input type="text" bind:value={name} class="clear-left block border mb-4 p-1">
	    	</div>
	    	<div>
	    		<label>Price</label>
	    		<input type="text" bind:value={price} class="clear-left block border mb-4 p-1">
	    	</div>
	    	<div>
	    		<label>SKU</label>
		    	<input type="text" bind:value={sku} class="clear-left block border mb-4 p-1">
			</div>
	    	<input type="submit" />
	    </form>
	{/if}
</main>
