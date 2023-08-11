import { editarProducto } from "../service/api.js";
import { botonesEditar } from "./mostrarProductos.js";

const modalEditarProducto = document.querySelector('.modal-editar-producto__background');
const botonCerrarModal = document.querySelector('.cerrar');
const nuevoNombre = document.querySelector('.nuevo-nombre');
const nuevoPrecio = document.querySelector('.nuevo-precio');
const nuevaDescripcion = document.querySelector('.nueva-descripcion');
const botonAceptarCambios = document.querySelector('.aceptar');

botonesEditar.forEach(botonEditar => {
  botonEditar.onclick = async () => {
    modalEditarProducto.style.display = 'grid';
    botonAceptarCambios.addEventListener('click', async () => {
      const edicion = {
        nombre: nuevoNombre.value,
        precio: nuevoPrecio.value,
        descripcion: nuevaDescripcion.value
      }
      editarProducto(botonEditar.parentElement.id, edicion);
    });
    botonCerrarModal.addEventListener('click', () => {
      modalEditarProducto.style.display = 'none';
    })
  }
});