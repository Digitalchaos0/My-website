window.addEventListener("load", function() {
    // Show and fade in the about section when the page loads
    document.getElementById("about-section").style.display = "block"; // Make the section visible
    setTimeout(function() {
        document.getElementById("about-section").style.opacity = "1"; // Fade-in effect
    }, 20); // Delay to allow section to be visible first
});
