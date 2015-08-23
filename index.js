var location = require("./lib/steam_countries.min.json");

function Dota2Location(){

}

Dota2Location.prototype.try = function(){
	console.log(location);
};

exports = Dota2Location;