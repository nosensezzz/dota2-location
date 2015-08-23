var location = require("./lib/steam_countries.min.json");

function dota2location () {

}

dota2location.findTillCountry = function (a) {
	if(location[a]){
		return location[a];
	} else {
		console.log("Error finding Country.");
		return;
	}
};

dota2location.findTillState = function (a , b) {
	var country = this.findTillCountry(a);
	if(country){
		if(country["states"][b]){
			return country["states"][b];
		} else {
			console.log("Error finding State");
			return ;
		}
	}
};

dota2location.findTillCity = function (a , b , c) {
	var state = this.findTillState(a,b);
	if(state){
		if(state["cities"][c]){
			return state["cities"][c];
		} else {
			console.log("Error finding City");
			return ;
		}
	}
};

module.exports = dota2location;