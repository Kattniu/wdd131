// Seleccionamos los elementos del DOM: input, botón y la lista osea los elementos HTML que necesitamos
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

// Añadimos un "event listener" al botón para que ejecute la función cuando lo presionemos
button.addEventListener('click', function() {
    // Capturamos el valor del campo de texto (el capítulo ingresado por el usuario)
    const chapter = input.value;

    // Verificamos si el campo no está vacío
    if (chapter !== '') {
        // Creamos un nuevo elemento 'li' para mostrar el capítulo
        const li = document.createElement('li');

        // Creamos un botón de eliminar para poder borrar el capítulo más tarde
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; // Establecemos el texto del botón como "X"
        deleteButton.classList.add('delete'); // Le añadimos una clase CSS opcional para estilos
        
        // Asignamos el texto del li al valor ingresado en el input
        li.textContent = chapter;
        
        // Añadimos el botón de eliminar dentro del 'li'
        li.append(deleteButton);
        
        // Agregamos el 'li' a la lista de capítulos
        list.append(li);
        
        // Limpiamos el campo de entrada para que el usuario pueda ingresar otro capítulo
        input.value = '';
        
        // Añadimos un evento al botón de eliminar para que al hacer clic borre el 'li'
        deleteButton.addEventListener('click', function() {
            list.removeChild(li); // Eliminamos el 'li' de la lista
        });

        // Añadimos un atributo aria-label para mejorar la accesibilidad (screen readers)
        deleteButton.setAttribute('aria-label', `Remove ${chapter}`);
    } else {
        alert('Please enter a chapter.'); // Si el campo está vacío, mostramos una alerta
    }
});
