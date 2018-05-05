// As a user
// When I enter a number into the input and submit
// I expect the new entry to appear in the table

var total = 0;

$("#entry").submit(changeAmt);

function changeAmt(event) {
	event.preventDefault();
	var newEntry = $("#newEntry").val()
	newEntry = parseInt(newEntry);
	$("#entries").append("<tr>" + "<td>" + newEntry + "</tr>" + "</td>")
	// console.log(newEntry)

	var newEntryNumber = $("#total").val()

	var entries = $("#entries").val()

	newEntryNumber = parseInt(newEntryNumber);

	entries = parseInt(entries);

	// console.log(entries);

	total = parseInt(total);

	var sum = (entries + newEntryNumber)

	document.querySelector ('#total').innerHTML = sum;

	// console.log(sum)
	}

	// var out = document.querySelector ('#out').innerHTML;

	// out = parseInt(out);

	// var sum = (out + 20);

	// document.querySelector ('#out').innerHTML = sum;

// $("#clickme").click(function() {
// 	var text = $("#item").val()
// 	var output = "<ul>" + text + "</ul";

// 	$("#list").append(output);

// 	$("#item").val("");
// })
	

// As a user
// When I enter a number into the input and submit
// I expect the total to be updated as the sum all of the entries

// As a user
// When I enter a number into the input and submit
// I expect the input to be cleared

// look into ParseInt



// $("#append").click(function () {
//   var text = $("#text").val();
//   var output = "<p>" + text + "</p>";
  
//   $("#target").append(output);
  
//   $("#text").val("");
// })