//import App from './Products.svelte'
import Header from './Menu.svelte'
import Body from './Body.svelte'
import Footer from './Footer.svelte'

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

export default {
	header,
	// app,
	body,
	footer
}
