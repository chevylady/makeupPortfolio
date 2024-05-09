// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	alias: {
		assets: '/<rootDir>/assets',
	},
	ssr: false,
	devtools: { enabled: true },
	app: {
		head: {
			title: 'Lazy Parrot - portfolio makijażowe',
			charset: 'utf-8',
			htmlAttrs: {
				lang: 'pl',
			},
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
			viewport: 'width=device-width, initial-scale=1',
			meta: [
				{
					name: 'description',
					content: 'portfolio z galerią makijaży artystycznych, okazjonalnych oraz sesje zdjęciowe',
				},
				{
					name: 'keywords',
					content: 'makuep makijaż face-painting body-painting',
				},
			],
		},
	},
	plugins: [{ src: '~/plugins/font-awesome.ts' }],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	css: ['~/assets/main.scss'],
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
	colorMode: {
		preference: 'light',
	},
	googleFonts: {
		families: {
			Montserrat: true,
			Merienda: true,
			Inter: [400, 700],
		},
	},
})
