<script>
  	import { Router, Route, Link } from "svelte-routing"
  	import Home from "./pages/Home.svelte"
  	import Product from "./pages/Product.svelte"

	//This property is necessary declare to avoid ignore the Router
  	export let url = ""
</script>

<div class="w-4/5 max-w-8xl mx-auto">
	<menu class="px-0">
		<Router url="{url}">
			<nav>
		    	<Link to="/">Home</Link>
		    	<Link to="products">Product</Link>
		  	</nav>
		</Router>
	</menu>
</div>
