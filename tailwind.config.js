/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'alkali': '#B8964A',
				'alkaline': '#BFC94C',
				'lanthanoid': '#CB688F',
				'aktinoid': '#A270A9',
				't-metal': '#A45950',
				'post-metal': '#43BFD3',
				'metalloid': '#2FB48C',
				'nonmetal': '#40B34D',
				'gas': '#5472B5',
				'u': '#B0B1B2'
			}
		},
	},
	plugins: [],
}

