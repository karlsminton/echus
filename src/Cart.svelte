<script>
	import { onMount } from "svelte"

	// let url = 'http://127.0.0.1:8080/cart'

	// let params = {
	// 	method: 'GET',
	// 	mode: 'cors',
	// 	headers: {
	// 		'Accept': 'application/json',
	// 		'Content-Type': 'application/json'
	// 	}
	// }

	onMount(() => {
		let session = Cookies.get('session')
		if (session === undefined) {
			//let cart = await fetch(url, params).then(response => response.json())
			Cookies.set('session', {items:[]});
		}
	})

	export let cost = '£40.99'
</script>

<div class="absolute w-80 max-h-screen min-h-screen top-0 right-0 p-10">
	<p>My Basket</p>
	<p>Cost: {cost}</p>
	<button>Checkout</button>
</div>

<style></style>