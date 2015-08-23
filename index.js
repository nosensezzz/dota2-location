var location = require("./lib/steam_countries.min.json");

function Dota2Location(){
	
}

Dota2Location.try = function(){
	console.log(location);
};

exports = {
	try : Dota2Location.try
};