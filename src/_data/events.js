const fetch = require('node-fetch');

module.exports = async function () {
	if (!process.env.FB_DEVELOPER_KEY) throw new Error("FB Developer Key not found"); // TODO more description

	return fetch("https://graph.facebook.com/v12.0/me/events?event_state_filter=%5B%22published%22%5D&fields=%5B%22cover%22%2C%22id%22%2C%22attending_count%22%2C%22interested_count%22%2C%22name%22%2C%22description%22%2C%22start_time%22%2C%22end_time%22%2C%22place%22%5D&time_filter=upcoming&access_token=" + process.env.FB_DEVELOPER_KEY)
		.then(res => res.json()); // node-fetch option to transform to json
};

