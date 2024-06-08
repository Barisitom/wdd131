document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    const lastModified = new Date(document.lastModified).toLocaleDateString();
    document.getElementById('lastModified').textContent = lastModified;
});
