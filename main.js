/* script.js
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const ratingState = document.getElementById("rating-state");
  const thankYouState = document.getElementById("thank-you-state");

  // Hide the form section
  ratingState.classList.add("hidden");
  ratingState.classList.remove("visible");

  // Show the thank-you section
  thankYouState.classList.remove("hidden");
  thankYouState.classList.add("visible");
}); */

// main.js
document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Hide the rating state section
    const ratingSection = document.getElementById("rating-state");
    ratingSection.classList.add("hidden"); // Add hidden class

    // Show the thank-you state section
    const thankYouSection = document.getElementById("thank-you-state");
    thankYouSection.classList.remove("hidden"); // Remove hidden class
});

// Update selected rating based on button clicks
const ratingButtons = document.querySelectorAll(".rateBtn");
const selectedRating = document.querySelector(".selectedRating");

ratingButtons.forEach(button => {
    button.addEventListener("click", function() {
        selectedRating.textContent = button.textContent; // Update with selected rating
    });
});