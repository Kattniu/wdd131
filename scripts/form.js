
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  // Llenar el select con los productos
  const productSelect = document.getElementById('product');

  products.forEach(product => { //bucle forech para recorrer cada producto 
      const option = document.createElement('option');//crea un nuevo elemento option
      option.value = product.id;  // Usamos el id del producto como valor
      option.textContent = product.name;  // Usamos el nombre del producto como texto
      productSelect.appendChild(option);
  });
  
  // Contador de revisiones
  function updateReviewCount() {
      let reviewCount = localStorage.getItem('reviewCount'); // Obtener el contador de localStorage
      reviewCount = reviewCount ? parseInt(reviewCount) : 0; // Si existe, convertir a número, si no, inicializar en 0
      reviewCount++; // Incrementar el contador
      localStorage.setItem('reviewCount', reviewCount); // Guardar el nuevo valor en localStorage
  }
  
  // Añadir un evento al formulario para actualizar el contador
  document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene que el formulario se envíe inmediatamente
    updateReviewCount(); // Actualiza el contador
    this.submit(); // Luego permite el envío después de actualizar el contador
});

// Limitar la fecha de instalación a la fecha actual o anterior (no fechas futuras)
document.getElementById('dateOfInstallation').max = new Date().toISOString().split("T")[0];


document.getElementById('reviewForm').addEventListener('submit', function(event) {
  const dateOfInstallation = document.getElementById('dateOfInstallation').value;
  const selectedDate = new Date(dateOfInstallation);
  const today = new Date();

  if (selectedDate > today) {
      alert("The installation date cannot be in the future.");
      event.preventDefault();
  }
});

document.getElementById('reviewCount').textContent = localStorage.getItem('reviewCount') || 0;

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
