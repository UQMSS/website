/**
 * This file loops through all of the images in assets/sponsors an makes them into a collection that can be used to display all of the sponsor logos.
 */

//Create collections so you can access the data in your templates
module.exports = function () {
	const fg = require('fast-glob');

	// Run search for images in /gallery and /sponsors
	const sponsorImages = fg.sync(['src/assets/sponsors/*']).map(path => path.replace(/^src\//, ''));
	return sponsorImages;
}
