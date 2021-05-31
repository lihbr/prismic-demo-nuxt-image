export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "prismic-demo-nuxt-image",
		htmlAttrs: {
			lang: "en"
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content:
					"A demo showcasing how it is to use Nuxt Image with images coming from Prismic"
			}
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ["@nuxtjs/prismic", "@nuxt/image"],

	prismic: {
		endpoint: "https://prismic-demo-nuxt-image.cdn.prismic.io/api/v2",
		modern: true
	},

	image: {
		provider: "prismic",
		prismic: {}
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
};
