document.addEventListener("DOMContentLoaded", function() {
    loadContent("home.html"); // Load the home content by default

    // Add event listeners to the navigation links
    document.querySelectorAll("nav a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior

            var page = this.getAttribute("href"); // Get the href attribute of the clicked link
            loadContent(page); // Load the content of the clicked page
        });
    });
});

function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.querySelector("main").innerHTML = html; // Insert the fetched HTML content into the main element
            // If you have any JavaScript code specific to each section, you can include it here
        })
        .catch(error => console.error("Error loading content:", error));
}
