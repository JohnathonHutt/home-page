/* features to add: pull a different chromecast image daily, Google search bar(possibly), to do list, links/bookmarks*/

//Clock and time specific greeting
function updateTime() {
  var d = new Date();

  var hours = d.getHours();
  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  }

  var minutes = d.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var dayOrNight = "";
  if (d.getHours() < 12) {
    dayOrNight = "am";
  } else {
    dayOrNight = "pm";
  }

  var time = hours + ":" + minutes + "   " + dayOrNight;

  document.querySelector(".time").innerHTML = time;

  //Title changes based on time
  var title = document.querySelector(".title");

  if (d.getHours() < 12) {
    title.innerHTML = "Good morning Johnathon";
  } else if (d.getHours() < 17) {
    title.innerHTML = "Good afternoon Johnathon";
  } else {
    title.innerHTML = "Good evening Johnathon";
  }
}

setInterval(updateTime, 1000);


//Add focus for the day
var subTitle = document.querySelector(".sub-title");

var focus = document.querySelector(".focus");

subTitle.addEventListener("click", updateFocus);

function updateFocus() {
  var update = prompt("Enter your focus for the day");
  focus.innerHTML = update;
}
