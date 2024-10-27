// Placeholder JavaScript file
//= require rails-ujs
console.log("JavaScript assets loaded");


document.addEventListener('DOMContentLoaded', function() {
// Set timeout to hide flash messages after 5 seconds
setTimeout(function() {
    // Select all elements with the classes `notice` and `alert`
    var flashMessages = document.querySelectorAll('.notice, .alert');
    
    // Loop through each message and hide it
    flashMessages.forEach(function(message) {
    message.style.transition = "opacity 0.5s ease"; // Smooth fade out
    message.style.opacity = "0"; // Set opacity to 0 for fade out effect

    // Remove the element after the fade-out transition completes
    setTimeout(function() {
        message.remove();
    }, 500); // Delay to match fade out duration
    });
}, 2500); // Dismiss after 2.5 seconds
});


