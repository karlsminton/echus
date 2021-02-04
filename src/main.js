import Header from './Menu.svelte'
import Body from './Body.svelte'
import Footer from './Footer.svelte'
import Cart from './Cart.svelte'

const header = new Header({
	target: document.querySelector('header'),
	props: {}
})

const body = new Body({
	target: document.body,
	props: {}
})

const footer = new Footer({
	target: document.querySelector('footer'),
	props: {}
})

const cart = new Cart({
	target: document.body,
	props: {}
})

export default {
	header,
	body,
	cart,
	footer
}
