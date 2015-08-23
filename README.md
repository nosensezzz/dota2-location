# dota2-location

This is a npm package that allowed developer to retrieve user location through User object come back from steam api(also works if other user object contains the same keywork information.)

# Usage

Install

npm install dota2-location
npm install dota2-location --save (if you want to save to you packages manage file)

Use

It's quite easy to use this package.

We have 3 methods provided to users,

1. findTillCountry(a) // a => "US" etc.
2. findTillState(a,b) // b => "PA" etc.
3. findTillCity(a,b,c) // c => "2862" etc. - Yonkers

example

var d2location = require("dota2-location");

var userLoctionCountry = d2location.findTillCountry("US");
var userLoctionState = d2location.findTillCountry("US" , "NY");
var userLoctionCountry = d2location.findTillCountry("US" , "NY" , "2862");


