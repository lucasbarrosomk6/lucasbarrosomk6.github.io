

document.addEventListener('DOMContentLoaded', (ev)=>{// waits for the webpage to load
  let form = document.getElementById('myform'); //selects the form in index.html
  //get the captured media file
  let input = document.getElementById('capture');//selects the file we added to the page
  
  input.addEventListener('change', (ev)=>{
      console.dir( input.files[0] );// displays the file in the console. console.log cannot be used because this is an object
      if(input.files[0].type.indexOf("image/") > -1){
        //if the first element in the "files" array exists, and is an image. 
        //example: indexof() should return -1 if such a file did not exist
          let img = document.getElementById('img');
          img.src = window.URL.createObjectURL(input.files[0]);
      }
      else if(input.files[0].type.indexOf("audio/") > -1 ){//same as above, but for audio
          let audio = document.getElementById('audio');
          audio.src = window.URL.createObjectURL(input.files[0]);
      }
      else if(input.files[0].type.indexOf("video/") > -1 ){//same as above, but for video
          let video = document.getElementById('video');
          video.src=window.URL.createObjectURL(input.files[0]);
      }
      
      
  })
  
})



let lati;
let long;

function getLocation() {
  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(initMap);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}//gets location and feeds the info to initMap. must include "position" in initMaps arguments

function initMap(position) {
  //calls the getLocation function to get coordinates
  getLocation();
  var uluru = { lat: position.coords.latitude, lng: position.coords.longitude };//sets the value of latlng to the current position
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map }); // sets a marker on the same position as the center.

};

function somewhereElse() {
  var uluru = { lat: -26.344, lng: 121.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
  lati =-26.344;
  long =  121.036;
}

function victoria() {

  var uluru = { lat: 48.407326, lng: -123.329773 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
  lati = 48.407326;
  long = -123.329773;
}

function edmonton() {
  var uluru = { lat: 53.631611, lng: -113.323975 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
  lati=53.631611;
  long=-113.323975;
}

function regina() {
  var uluru = { lat: 50.44521, lng: -104.618896 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
  lati=50.44521;
  long= -104.618896;
}

function winnipeg() {
  var uluru = { lat: 49.895077, lng: -97.138451 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
  lati =  49.895077;
  long =  -97.138451;
}

function toronto() {
  var uluru = { lat: 43.65107, lng: -79.347015 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
  lati =  43.65107;
  long =  -79.347015;
  
}

function getPlaces(lati,long) {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const key = "AIzaSyAEiBLouIRytrqaMBHYASh0cIEUum0mFnc";
  const api =
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lati},${long}&radius=1500&type=restaurant&key=`;
  fetch(proxy + api + key)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}
