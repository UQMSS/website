// TODO https://www.zachleat.com/web/eleventy-image/
// https://www.zachleat.com/web/eleventy-image/

async function imageShortcode(src, alt) {
	if (alt === undefined) {
		// You bet we throw an error on missing alt (alt="" works okay)
		throw new Error(`Missing \`alt\` on myImage from: ${src}`);
	}

	let metadata = await Image(src, {
		widths: [100, 300, 600, 1200],
		formats: ["jpeg"]
	});

	let data = metadata.jpeg[metadata.jpeg.length - 1];
	return `<img src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" loading="lazy" decoding="async">`;
}


module.exports = function (config) {
	config.addPassthroughCopy({
		// 'src/css/_site/styles.css': './styles.css',
		'node_modules/@fortawesome/fontawesome-free/css/all.css': './fa-all.css',
		'node_modules/@fortawesome/fontawesome-free/webfonts': './webfonts',
		'src/assets': './assets'
	});

	// Shortcode for images
	config.addNunjucksAsyncShortcode("image", imageShortcode);
	config.addLiquidShortcode("image", imageShortcode);
	config.addJavaScriptFunction("image", imageShortcode);

	return {
		dir: {input: 'src'},
	};
}

