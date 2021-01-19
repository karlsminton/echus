<script>
  	import { Router, Route, Link } from "svelte-routing"
  	import Home from "./pages/Home.svelte"
  	import Products from "./pages/Products.svelte"
  	import Product from "./pages/Product.svelte"
  	import AdminProducts from "./pages/admin/Products.svelte"

	//This property is necessary declare to avoid ignore the Router
  	export let url = ""
</script>

<main>
	<div class="w-4/5 max-w-8xl mx-auto">
		<Router url="{url}">
		  	<div>
		    	<Route path="products" component="{Products}" /> 
		    	<Route path="product/:id" component="{Product}" let:params>
		    		<Product id="{params.id}" />
		    	</Route>
		    	<Route path="products/admin/:id" let:params>
		    		<AdminProducts id="{params.id}" />
		    	</Route>
			    <!--for now the router just support case sensitive,
			        one workaround colud be add two time the route
			        Example.
			       <Route path="About" component="{About}" /> 
			    -->
		    	<Route path="/"><Home /></Route>
		  	</div>
		</Router>
	</div>
</main>
