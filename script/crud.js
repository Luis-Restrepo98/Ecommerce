const tablaBody = document.querySelector("#tabla-personas tbody");
/* import {infoProductos} from "./api.js" */

// URL declarada
const URLProductos = "http://localhost:3000/productos/"

/* traer informacion de la base de datos */
axios.get(URLProductos)
  .then(response => {
    const data = response.data;
    console.log(data);
    
data.forEach(producto => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.descripcion}</td>
       
        <button onclick="editarProducto(${producto.id})">Editar</button>
        <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
      </td>
      `;
      
      tablaBody.appendChild(row);
    });
 
  })
  .catch(error => console.error("Error al obtener los datos:", error));

 async function editarProducto(id) {
  axios.get(URLProductos)
  .then(response => {
    const data = response.data;
    const producto = data.find(producto => producto.id === id);
    if (producto) {
      const nuevoNombre = prompt("Nuevo nombre:", producto.nombre);
      const nuevoPrecio = prompt("Nuevo precio:", producto.precio);
      const nuevaDescripcion = prompt("Nueva descripcion:", producto.descripcion);
      const edicion = {
        "nombre": nuevoNombre,
        "precio": nuevoPrecio,
        "descripcion": nuevaDescripcion,
        "img": {
          "imagenUno": producto.img.imagenUno,
        "imagenDos": producto.img.imagenDos,
        "imagenTres": producto.img.imagenTres,
        "imagenCuatro": producto.img.imagenCuatro,
        } 
      }
  

        // Llamada Axios para actualizar el nombre en el servidor
        axios.put(`${URLProductos}/${id}`, edicion)
          .then(response => {
            console.log("Persona actualizada:", response.data);
            /* mostrarDatos(); */
          })
          .catch(error => console.error("Error al actualizar:", error));
       
    
    }})
    .catch(error => console.error("Error al obtener los datos:", error));
  
  }

 async function eliminarProducto(id) {
    const confirmacion = confirm("¿Estás seguro de eliminar esta persona?");
    if (confirmacion) {
      
        // Llamada Axios para eliminar la persona en el servidor
      await axios.delete(`${URLProductos}/${id}`)
        .then(response => {
          console.log("Persona eliminada:", response.data);
          datos = datos.filter(producto => producto.id !== id);
         /*  mostrarDatos(); */
        })
        .catch(error => console.error("Error al eliminar:", error));
    }
  }

  // Inicialización: Mostrar datos al cargar la página
  /* mostrarDatos(); */

  async function agregarProducto() {
   
   
        const nuevoNombre = prompt("Nuevo nombre:");
        const nuevoPrecio = prompt("Nuevo precio:");
        const nuevaDescripcion = prompt("Nueva descripcion:");
        const imagenUno = prompt("Ingresar URL del producto");
        const imagenDos = prompt("Ingresar URL del producto");
        const imagenTres = prompt("Ingresar URL del producto");
        const imagenCuatro = prompt("Ingresar URL del producto");
        const edicion = {
          "nombre": nuevoNombre,
          "precio": nuevoPrecio,
          "descripcion": nuevaDescripcion,
          "img": {
            "imagenUno": imagenUno,
          "imagenDos": imagenDos,
          "imagenTres": imagenTres,
          "imagenCuatro": imagenCuatro,
          } 
        }
       
  
          // Llamada Axios para actualizar el nombre en el servidor
          axios.post(`${URLProductos}`, edicion)
            .then(response => {
              console.log("Producto agregado:", response.data);
              /* mostrarDatos(); */
            })
            .catch(error => console.error("Error al agregar:", error));
  
    }

    /* async function refreshProducts() {
      const productsData = await infoProductos();
      displayProducts(productsData);
    }
  
    refreshProducts();  
  
  
    function displayProducts(productsData) {
      const row = document.createElement("tr");
      const productHTML = productsData.map(producto => `
      
      <td>${producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>${producto.descripcion}</td>
     
      <button onclick="editarProducto(${producto.id})">Editar</button>
      <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
    </td>
        
      `).join("");
      row.innerHTML = `<ul>${productHTML}</ul>`;
    } */