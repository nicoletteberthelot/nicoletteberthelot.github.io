// As a User
// When I view the site
// I see a map
   var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }

// As a User
// When I view the site
// I expect to only see NYC

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.730610, lng: -73.935242},
    zoom: 11
}); 
}         


// As a User
// When I view the site
// I want to see a marker on NYC

var marker1 = new google.maps.Marker({
    position: {lat: 40.730610, lng: -73.935242},
    map: map,
  }); 



// Bonus:

// As a User
// When I view the map
// I want to see the terrain view

// More Bonus:

// As a User
// When I press a button
// I see 3 markers appear on the map

// Unbelievable, Seriously???? Bonus

// As a User
// When I view the site
// All the CitiBike NYC stations appear on the map as markers

// Hint: Make sure to use this URL: https://api.citybik.es/v2/networks/citi-bike-nyc