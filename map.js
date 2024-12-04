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

window.onload = function () {
  const modal = document.getElementById("promo-modal");
  const closeBtn = document.querySelector(".close");
  const viewScheduleBtn = document.getElementById("holiday-schedule");

  // Display the modal on page load
  modal.style.display = "block";

  // Close the modal when clicking the close button
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Close the modal when clicking outside of the modal content
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Scroll to the schedule section when clicking the button
  viewScheduleBtn.onclick = function () {
    document
      .getElementById("holiday-schedule-container")
      .scrollIntoView({ behavior: "smooth" });
    modal.style.display = "none";
  };
};
