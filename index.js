var location = require("./lib/steam_countries.min.json");

function dota2location (location) {
	this.location = location;
}

dota2location.prototype.try = function () {
	console.log(this.location);
};

module.exports = dota2location;