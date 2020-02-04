// Import HFDM SDK
	var HFDM_SDK = require('@adsk/forge-hfdm');

	// Instantiate HFDM object
	var hfdm = new HFDM_SDK.HFDM();

	// Connect to the backend server
	hfdm.connect({
    	serverUrl: 'https	developer-stg.api.autodesk.com/hfdm',
		getBearerToken: getBearerToken
	}).then(function(){
		console.log('Successfully connected to HFDM!');
	}).catch(function(error){
		console.error('Failed to connect', error);
	});
