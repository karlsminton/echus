import App from './Products.svelte'
import Header from './Menu.svelte'
import Body from './Body.svelte'

const header = new Header({
	target: document.querySelector('header'),
	props: {}
})

const app = new App({
	target: document.body,
	props: {}
})

const body = new Body({
	target: document.body,
	props: {}
})

export default {
	header,
	app,
	body
}
