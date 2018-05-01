// As a user
// When I change my selection
// I expect the background image to change into the image of my selection

$("#city-type").change(changeCity) 

function changeCity() {
var userSelection = $("#city-type");

$('background-image').toggleClass('.images');

// $('background-image').html(userSelection)

console.log(userSelection)

}


// $('body').toggleClass("#city-type");


// .nyc {
//   background-image: url(../images/nyc.jpg)
// }
// .sf {
//   background-image: url(../images/sf.jpg)
// }
// .la {
//   background-image: url(../images/la.jpg)
// }
// .atx {
//   background-image: url(../images/austin.jpg)
// }
// .syd {
//   background-image: url(../images/sydney.jpg)


// $("body").onclick(changeToBlue);
// function changeToBlue() {
// $(".container").toggleClass("blue");
// }