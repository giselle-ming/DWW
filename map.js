var map = L.map("mapid").setView([45.32737114631411, -75.74472431487743], 15);

// Set up the OpenStreetMap layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

// Add a marker for the location
var marker = L.marker([45.32737114631411, -75.74472431487743]).addTo(map);

// Optionally add a popup to the marker
marker
  .bindPopup("<b>Nepean Sportsplex</b></b><br>31701 Woodroffe Ave, Ottawa ON")
  .openPopup();
