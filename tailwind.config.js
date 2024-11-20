const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#090E10',
			white: '#ffffff',
			mint: '#00B67A',
			customGradient: 'radial-gradient(121.18% 95% at 4.71% 75.52%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
			gray: {
				DEFAULT: '#152023', // used
				100: '#F2F2F2', // used
				200: '#E4E5E5', // used
				300: '#C6C7C7', // used
				400: '#A2A3A4', // used
				500: '#E9550D', // used
				600: '#152023', // used
				700: '#E9550D',
				800: '#10191B',
				900: '#0D1416',
				1000: '#090E10', // used
			},
			green: {
				DEFAULT: '#3AAA35', // used
				// 100: '#F3F8F2',
				// 200: '#E6F0E5',
				// 300: '#C9E1C8',
				// 400: '#A7D0A6',
				// 500: '#7DBE7B',
				600: '#3AAA35', // used
				// 700: '#34982F',
				// 800: '#2D8429',
				// 900: '#256C22',
				// 1000: '#1A4C18',
			},
		},
		fontSize: {
			xs: '0.75rem', // 12
			sm: '0.875rem', // 14
			base: '1rem', // 16
			md: '1.063rem', // 17
			lg: '1.125rem', // 18
			xl: '1.25rem', // 20
			'2xl': '1.5rem', // 24
			'3xl': '1.875rem', // 30
			'4xl': '2.25rem', // 36
			'5xl': '3rem', // 48
			'6xl': '3.75rem', // 60
			'7xl': '4.5rem', // 72
			'8xl': '6rem', // 96
			'9xl': '8rem', // 128
		},
		fontFamily: {
			sans: ['GeneralSans', 'sans-serif'],
		},
		fontWeight: {
			light: '300',
			normal: '400',
			medium: '500',
			bold: '700',
		},
		screens: {
			xs: '375px',
			...defaultTheme.screens,
			'3xl': '1600px',
			'4xl': '1920px',
		},

		extend: {
			colors: {
				brands: {
					facebook: '#1877f2',
					twitter: '#1da1f2',
					x: '#14171a',
					instagram: '#405de6',
					linkedin: '#0a66c2',
					youtube: '#ff0000',
					vimeo: '#1ab7ea',
					pinterest: '#e60023',
					tiktok: '#ff0050',
				},
				orange:  '#e9550d',
			},
			backgroundImage: {
				check: "url('/dist/images/check.svg')",
			},
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
	safelist: [
		'text-orange',
		'border-orange',
		'hover:bg-orange',
		'hover:border-orange',
	  ],	  
	content: ['./templates/**/*.{twig,html,js}', './src/**/*.{css,js,jsx,tsx}'],

};
