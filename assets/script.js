// Moment.js for current date
var today = moment().format("dddd, MMMM Do YYYY, h:mm");
console.log(today)

var currentDay = document.getElementById("currentDay")
currentDay.textContent = today


// allow text area to save entry when button is pushed

$(".saveBtn").on("click", function () 
   

)



// text area for adding appointments and saving

$("#8am .description").val(localStorage.getItem("hour8"));
$("#9am .description").val(localStorage.getItem("hour9"));
$("#10am .description").val(localStorage.getItem("hour10"));
$("#11am .description").val(localStorage.getItem("hour11"));
$("#12pm .description").val(localStorage.getItem("hour12"));
$("#1pm .description").val(localStorage.getItem("hour1"));
$("#2pm .description").val(localStorage.getItem("hour2"));
$("#3pm .description").val(localStorage.getItem("hour3"));
$("#4pm .description").val(localStorage.getItem("hour4"));
$("#5pm .description").val(localStorage.getItem("hour5"));
$("#6pm .description").val(localStorage.getItem("hour6"));
$("#7pm .description").val(localStorage.getItem("hour7"));


localStorage.setItem(time, text);