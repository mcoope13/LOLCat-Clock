var time = new Date().getHours(); // NATIVE JAVASCRIPT CODE: represents current hour (1-24)
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function() 
{
var lolcat = document.getElementById('lolcat');
 
// defining your default image
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
var message = document.getElementById('timeEvent');

if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
}else if (time == napTime){
    messageText = "IZ NAP TIME...";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
}else if (time == lunchTime){
    messageText = "IZ NOM NOM NOM TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
}else if (time == wakeupTime){
    messageText = "IZ TIME TO GETTUP.";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
}else if (time < noon){
    messageText = "Good morning, Mate!";
	image = "https://kittentoob.com/wp-content/uploads/2019/03/Cats_Waking_Up_1.jpg";
}else if (time > evening){
    messageText = "Good Evening, Mate!";
	image = "https://www.thehappycatsite.com/wp-content/uploads/2017/06/Are-cats-nocturnal-HC-long.jpg";
}else{
    messageText = "Good afternoon, Mate!";
	image = "https://cdn.pixabay.com/photo/2017/05/31/09/54/cat-2359779_960_720.jpg";
}
 
console.log(messageText);
message.innerText = messageText;
lolcat.src = image;

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};
showCurrentTime();
	
};
updateClock(); 
var oneSecond = 1000; 
setInterval( updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {
	
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	   partyTimeButton.innerText="Party Over";
	   partyTimeButton.style.backgroundColor="#0A8DAB";
      // text in the button should read "Party Over"
      // color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
	   partyTimeButton.innerText="PARTY TIME!";
	   partyTimeButton.style.backgroundColor="#222";
      // text in the button should read "PARTY TIME!"
      // color of the button should be "#222" (bonus!)
   }
};
partyTimeButton.addEventListener('click', partyEvent);

var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
 
var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};
 
var napEvent = function() {
    napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);



