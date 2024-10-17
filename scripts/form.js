
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
  products.forEach(product => {
      const option = document.createElement('option');
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
  document.getElementById('reviewForm').addEventListener('submit', function() {
      updateReviewCount(); // Llamar a la función para actualizar el contador
  });
  
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
