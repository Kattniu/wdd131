
const temperature = 22; // in °C
const windSpeed = 10; // in km/h

// Function to calculate wind chill
function calculateWindChill(temp, speed) {
    // Viable wind chill calculations
    if ((temp <= 10 && speed > 4.8)) {
        // Calculate the wind chill using the formula for Celsius
        return Math.round(13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16)));
    } else {
        return "N/A"; // Wind chill not applicable
    }
}


window.onload = function() {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = windChill;
    
    // Display the last modified date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
}
