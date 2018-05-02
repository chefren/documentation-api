// Getting one account

const request = require('request-promise');

// Substitute CLOUD_CONFORMITY_API_ENDPOINT and YOUR_API_KEY
let endpoint = "CLOUD_CONFORMITY_API_ENDPOINT";
let APIKey = "YOUR_API_KEY";
let accountId = "YOUR_ACCOUNT_ID";

let options = {
	method: 'GET',
	uri: `${endpoint}/v1/accounts/${accountId}`,
	headers: {
		"Content-Type": "application/vnd.api+json",
		'Authorization': `ApiKey ${APIKey}`
	},
	json: true
};

request(options).then(function(response) {

	console.log(JSON.stringify(response, null, 2));

});

