var fs = require('fs');

//var shopDeals = require('./fruition');


// var shopDeals = fs.readFileSync("fruition.json");
// shopDeals = JSON.parse(shopDeals);
// "{}" vs {}





var shopDeals = {
  "woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  },

  "chockers": {
    "bananas": 2,
    "apples": 5,
    "oranges": 4
  },

  "pickle pay": {
    "bananas": 4,
    "oranges": 7
  },

  "shopwrong": {
    "apples": 2,
    "bananas": 3
  },

  "kwakspar": {
    "oranges": 9,
    "apples": 4
  }
};


//console.log("Output shopDeals : \n" + JSON.stringify(shopDeals["shopwrong"]));

for(var shop in shopDeals){
	console.log(shop);
	console.log(shopDeals[shop]);
}

// var json_data = [];
// // var splitting = json_data.split(',');
// json_data.push(content);
// // console.log(splitting);
// console.log("Output Content : \n" + json_data)


//create an array of the json file and print out specific info needed