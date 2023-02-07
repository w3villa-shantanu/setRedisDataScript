const redis = require("redis");
const request = require('request');

const redisclient = redis.createClient(
	{
		socket: {
            port: 6379,
            host: "127.0.0.1"
	    	// host: 'superone-game-royale-0001-001.jlnwgb.0001.euw2.cache.amazonaws.com'
        }
	}
);

// const redisclient = redis.createClient(6379,'127.0.0.1');


console.time("t1");
console.log(new Date().getTime());

(async () => {
	await redisclient.connect();
})();

console.log("Connecting to the Redis");

redisclient.on("ready", () => {
	console.log("Connected!");
});

redisclient.on("error", (err) => {
	console.log("Error in the Connection");
});

redisclient.set(`name`, 'shantanu').then((res) => {
    console.count("count");
    console.log("setting key ====>", "name");
});