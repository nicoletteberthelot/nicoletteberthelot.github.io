// As a User
// When I visit the site
// I expect to see the names of the all the stations
// var array = ["0 … 99", "100 … 199", "200 … 299", "300 … 399", "400 … 499", "500 … 599", "600 … 699", "700 … 799", "800 … 810"]



// As a User
// When I visit the site
// I expect to see only the first fifty stations on the list

// As a User
// When I visit the site
// I expect to see fifty stations with free bikes only

// Bonus

// As a User
// I want to get data from the newer API instead: https://api.citybik.es/v2/networks/citi-bike-nyc
// So that I can get the most accurate results

// Unreal, Super Epic Bonus

// As a User
// When I select "number of free bikes" from a dropdown
// I see fifty stations where the "number of free bikes" is greater than my selection

$.ajax({
  type: 'GET',
  url: 'http://api.citybik.es/citi-bike-nyc.json',
  success: function(stations) {
  	stations.forEach(function(element) {
	console.log(element);
});
  }
});
