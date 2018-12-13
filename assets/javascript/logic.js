$(document).ready(function(){

$("#postButton").on('click',function(){



// gets and displays the date
var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth(); 
var year = currentDate.getFullYear();

var monthS = ["Janurary", "Febuary","March","April","May","June","July","August","September","October","November","December"]

var dateString = monthS[month] + " " + date + ", " + year;

console.log(dateString);

// gets and displays the time
var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
// converts to standard time and adjusts minutes
if (hours >= 12) {
	hours = hours - 12;
	var amPM = " pm";
} else {
	hours = hours;
	amPM = " am";
}
if (minutes < 10) {
	minutes = "0" + minutes;
}

var timeString = hours + ":"+ minutes + amPM;

console.log(timeString);


	 // creates the div to append later
	 var commentItem = $("<div>");
	 // stores image into a var
	 var image = $('<img id="commentImg" src="assets/images/smiley.png" >'); 
	 // appends the image to the div
	commentItem.append(image);

	// captures input field val and creates an h6
	var name = $("#name").val().trim();
    var nameTag = $("<h6>");
    // defines nameTag text and appends the name tag 
    nameTag.text(name);
	commentItem.append(nameTag);
	// creates the time p and appends it
	
    var dateTag = $("<p>");

    dateTag.text(dateString + " at " + timeString);
    nameTag.append(dateTag);


	// captures value of message in var
	var comment = $("#messageText").val().trim();
    var commentTag = $("<p>");
    // defines commentTag text and appends the p tag
    commentTag.text(comment);
    commentItem.append(commentTag);
	
	// adds class to style to sheet
	commentItem.addClass('commentStyle');
	// appends the final comment
	$('.comment-section').append(commentItem);
	
$("#messageText").val(' ');
$("#name").val(' ');




})


















});