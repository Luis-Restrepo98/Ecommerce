const tablaBody = document.querySelector("#tabla-personas tbody");

// URL declarada
const URLClientes = "http://localhost:3000/informacionCliente"

// traer informacion de la base de datos
axios.get(URLClientes)
  .then(response => {
    const data = response.data;
    data.forEach(persona => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${persona.nombre}</td>
        <td>${persona.cedula}</td>
        <td>${persona.email}</td>
        <td>${persona.celular}</td>
        <td>${persona.numeroTarjeta}</td>
        <button onclick="editarPersona(${persona.id})">Editar</button>
        <button onclick="eliminarPersona(${persona.id})">Eliminar</button>
      </td>
      `;
      tablaBody.appendChild(row);
    });
  })
  .catch(error => console.error("Error al obtener los datos:", error));

  function editarPersona(id) {
    const persona = datos.find(persona => persona.id === id);
    if (persona) {
      const nuevoNombre = prompt("Nuevo nombre:", persona.nombre);
      if (nuevoNombre !== null) {
        persona.nombre = nuevoNombre;

        // Llamada Axios para actualizar el nombre en el servidor
        axios.put(URLClientes`${id}`, { nombre: nuevoNombre })
          .then(response => {
            console.log("Persona actualizada:", response.data);
            mostrarDatos();
          })
          .catch(error => console.error("Error al actualizar:", error));
      }
    }
  }

  function eliminarPersona(id) {
    const confirmacion = confirm("¿Estás seguro de eliminar esta persona?");
    if (confirmacion) {
      
        // Llamada Axios para eliminar la persona en el servidor
      axios.delete(URLClientes`${id}`)
        .then(response => {
          console.log("Persona eliminada:", response.data);
          datos = datos.filter(persona => persona.id !== id);
          mostrarDatos();
        })
        .catch(error => console.error("Error al eliminar:", error));
    }
  }

  // Inicialización: Mostrar datos al cargar la página
  mostrarDatos();
