// TODO https://www.zachleat.com/web/eleventy-image/
// https://www.zachleat.com/web/eleventy-image/
const Image = require("@11ty/eleventy-img");

/*
async function imageShortcode(src, alt, className) {
	if (!alt) {
		throw new Error(`Missing \`alt\` on myImage from: ${src}`);
	}

	let stats = await Image(src, {
		widths: [25, 320, 640, 960, 1200, 1800, 2400],
		formats: ["jpeg", "webp"],
		urlPath: "/images/",
		outputDir: "./_site/images/",
	});

	let lowestSrc = stats["jpeg"][0];

	const srcset = Object.keys(stats).reduce(
		(acc, format) => ({
			...acc,
			[format]: stats[format].reduce(
				(_acc, curr) => `${_acc} ${curr.srcset} ,`,
				""
			),
		}),
		{}
	);

	const source = `<source type="image/webp" srcset="${srcset["webp"]}" >`;

	const img = `<img
	  loading="lazy"
	  alt="${alt}"
	  src="${lowestSrc.url}"
	  sizes='(min-width: 1024px) 1024px, 100vw'
	  srcset="${srcset["jpeg"]}"
	  width="${lowestSrc.width}"
	  height="${lowestSrc.height}"
	  >`;
	//class="${className}"

	return `<picture class="${className} > ${source} ${img} </picture>`;
}
*/


async function imageShortcode(src, alt, className) {
	let sizes = [25, 320, 640, 1200, 1800]

	let metadata = await Image(src, {
		widths: sizes,
		formats: ["webp", "jpeg"],
		urlPath: "/images/",
		outputDir: "./_site/images/",
	});

	let imageAttributes = {
		sizes,
		alt,
		loading: "lazy",
		decoding: "async",
		//"class": className
	};

	// You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
	return `<div class="${className}"> ${Image.generateHTML(metadata, imageAttributes)} </div>`;
}


module.exports = function (config) {
	config.addPassthroughCopy({
		// 'src/css/_site/styles.css': './styles.css',
		'node_modules/@fortawesome/fontawesome-free/css/all.css': './fa-all.css',
		'node_modules/@fortawesome/fontawesome-free/webfonts': './webfonts',
		'src/assets': './assets'
	});

	// Shortcode for images
	config.addNunjucksAsyncShortcode("Image", imageShortcode);
	config.addLiquidShortcode("Image", imageShortcode);
	config.addJavaScriptFunction("Image", imageShortcode);

	return {
		dir: {input: 'src'},
	};
}

