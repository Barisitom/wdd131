document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleDateString();
});
