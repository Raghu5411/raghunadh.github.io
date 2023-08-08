// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
  
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Perform form submission logic here
  // For example, send the form data to a server using AJAX
  
  // Reset the form after submission
  this.reset();
});
// Get a reference to the contact form and the message container
const contactForm = document.getElementById("contact-form");
const messageContainer = document.getElementById("message-container");

// Add an event listener to the form submission
contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Hide the contact form
  contactForm.style.display = "none";
  
  // Show the "Thank You" message
  messageContainer.innerHTML = "<p>Thank you .</p>";
});
