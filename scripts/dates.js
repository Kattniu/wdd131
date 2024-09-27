// Obtener la fecha y hora actual
const now = new Date();

// Formatear la fecha y hora como una cadena legible
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // Cambia a true para formato de 12 horas
};

const currentDateTime = now.toLocaleString('es-PE', options); // Cambiar 'es-PE' si deseas otro idioma

// Mostrar la fecha y hora actual en el lugar correspondiente
document.getElementById('current-date-time').textContent = currentDateTime;

// Obtener el año actual
const currentYear = now.getFullYear();
document.getElementById('current-year').textContent = currentYear;
