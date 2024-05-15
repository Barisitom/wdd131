document.addEventListener('DOMContentLoaded', function() {
    // Weather data (static for now)
    const temperature = 25; // in Celsius
    const windSpeed = 10; // in km/h
    
    // Calculate windchill if conditions are met
    if (temperature <= 10 && windSpeed > 4.8) {
        const windchill = calculateWindChill(temperature, windSpeed);
        document.getElementById('windchill').textContent = windchill.toFixed(2) + '°C';
    } else {
        document.getElementById('windchill').textContent = 'N/A';
    }
});

// Function to calculate windchill
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}
