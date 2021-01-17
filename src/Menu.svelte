<script>
  	import { Router, Route, Link } from "svelte-routing";
  	import Home from "./pages/Home.svelte";
  	import Product from "./pages/Product.svelte";

	//This property is necessary declare to avoid ignore the Router
  	export let url = "";
</script>

<menu class="">
	<Router url="{url}">
		<nav>
	    	<Link to="/">Home</Link>
	    	<Link to="product">Product</Link>
	  	</nav>
	  	<!--<div>
	    	<Route path="product" component="{Product}" /> 
		    <--for now the router just support case sensitive,
		        one workaround colud be add two time the route
		        Example.
		       <Route path="About" component="{About}" /> 
		    --<
	    	<Route path="/"><Home /></Route>
	  	</div>-->
	</Router>
</menu>
