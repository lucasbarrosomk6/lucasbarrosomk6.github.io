let lat1;
let lon1;
let lon2;
let lat2;
function setLocation(position) {
  lat2 = position.coords.latitude;
  lon2 = position.coords.longitude;
  return lat2, lon2;
}

function getLocation() {
  const distance = document.getElementById("distance");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setLocation);
  } else {
    const newLocal = "Geolocation is not supported by this browser.";
    distance.innerHTML = newLocal;
  }
}

function initMap(x) {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: x
  });

  var marker = new google.maps.Marker({
    position: x,
    map: map
  });
}

async function fetchData() {
  try {
    const response = await fetch("http://api.open-notify.org/iss-now.json");
    const data = await response.json();

    let uluru = {
      lat: parseInt(data.iss_position.latitude, 10),
      lng: parseInt(data.iss_position.longitude, 10)
    };

    initMap(uluru);

    lat1 = parseInt(data.iss_position.latitude, 10);
    lon1 = parseInt(data.iss_position.longitude, 10);

    return lat1, lon1;
  } catch (e) {
    console.log(e);
  }
}
function distance() {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;

    return dist * 1.609344;
  }
}
function displayDist() {
  const x = document.getElementById("distance");
  const y = document.getElementById("football");
  const z = document.getElementById("egg");
  const s = document.getElementById("rock");
  getLocation();
  if (distance() > 0) {
    x.innerHTML = `you are ${Math.floor(
      distance() + 400
    )} kilometers away from the ISS`;
    y.innerHTML = `${Math.floor(distance() / 0.109728)} football feilds`;
    z.innerHTML = `${Math.floor(distance() / 0.00015)} egg rolls`;
    s.innerHTML = `${Math.floor(distance() / 0.0019558)} LEGENDS`;
  } else {
    x.innerHTML = "please click button again";
  }
}
