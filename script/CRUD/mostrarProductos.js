import { mostrarProductos } from "../service/api.js";

const tablaBody = document.querySelector("#tabla-personas tbody");

const productos = await mostrarProductos();

productos.forEach(producto => {
  const { nombre, precio, descripcion, id } = producto;
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${nombre}</td>
    <td>${precio}</td>
    <td>${descripcion}</td>
    <td id=${id}>
      <button class="editar">Editar</button>
      <button class="eliminar">Eliminar</button>
    </td>
  `;
      
  tablaBody.appendChild(row);
});

export const botonesEditar = document.querySelectorAll('.editar');
export const botonesEliminar = document.querySelectorAll('.eliminar');

