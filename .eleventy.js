module.exports = function (config) {
	config.addPassthroughCopy({
		'src/css/_site/styles.css': './styles.css',
		'src/assets': './assets'
	});

	return {
		dir: {input: 'src'},
	};
}

