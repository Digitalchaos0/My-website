document.getElementById("explore-button").addEventListener("click", function() {
    // Fade out the welcome section
    document.getElementById("welcome-section").style.opacity = "0";
    
    // Wait for the fade-out to complete, then redirect
    setTimeout(function() {
        // Redirect to about.html
        window.location.href = "about.html";
    }, 1000); // Delay to match the fade-out duration
});
