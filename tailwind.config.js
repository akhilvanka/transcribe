// @ts-check

/** @type {import("tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
	content: ['./src/**/*.{ts,tsx,css}'],
	darkMode: 'media',
	theme: {
		fontFamily: {
			mono: ['"Inter"', 'sans-serif'],
			dm: ['"DM Mono"', 'monospace'],
		},
		fontWeight: {
			light: 500,
			medium: 700,
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
