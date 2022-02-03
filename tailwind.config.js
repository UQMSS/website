const MSS_BLUE = '#5de2e7'


module.exports = {
	content: [
		"./_site/**/*.html"
	],
	plugins: [
		require('@tailwindcss/typography')
	],
	theme: {
		extend: {
			maxWidth: {
				"sponsor": "10rem"
			},
			colors: {
				'mss-blue': MSS_BLUE
			},
			typography: {
				DEFAULT: {
					css: {
						a: {
							'&:hover': {
								color: MSS_BLUE
							}
						}
					}
				}
			}
		}
	}
}
