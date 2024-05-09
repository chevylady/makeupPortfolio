/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
		'./node_modules/flowbite/**/*.js',
	],
	plugins: [require('flowbite/plugin')],
	theme: {
		extend: {
			fontFamily: {
				mont: ['Montserrat'],
				merienda: ['Merienda'],
			},
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			myColor: '#f1f1f1'
		  }
	}
}
