// Get references to the form and loader elements
var form = document.getElementById('myForm');
var loader = document.getElementById('loader');

// Add event listener to the form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Show the loader spinner
  loader.style.display = 'block';

  // Simulate a delay (replace this with your actual form submission logic)
  setTimeout(function() {
    // Hide the loader spinner
    loader.style.display = 'none';

    // Reset the form or perform any other actions
    form.reset();
  }, 2000); // Replace 2000 with your desired delay in milliseconds
});
