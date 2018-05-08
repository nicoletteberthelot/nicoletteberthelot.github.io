// As a User
// When I visit the site
// I expect to see the names of the all the stations

$.ajax({
  type: 'GET',
  url: 'http://api.citybik.es/citi-bike-nyc.json',
  success: function(stations) {
  	stations.filter(bikes  {
	console.log(element);
});
  }
});

console.log(result);

// As a User
// When I visit the site
// I expect to see only the first fifty stations on the list

$.ajax(
{
  type: 'GET',
  url: 'http://api.citybik.es/citi-bike-nyc.json',
  success: function(ajaxResponse) {
  	const shortList = ajaxResponse.filter(item => item.idx <= 50);
  		ajaxResponse.forEach(
  		function(ajaxResponse) {	
  		var output = "<li>" + ajaxResponse.name + "</li>";
  		$("#list").append(output);
	}
	)
	}
}
)

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

	


