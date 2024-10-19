document.addEventListener("DOMContentLoaded", function() {
    // Display the current year
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    
    // Display the current date and time
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    };
    document.getElementById('datetime').textContent = now.toLocaleString('en-US', options);
});
