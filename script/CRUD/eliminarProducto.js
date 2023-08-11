import { eliminarProducto } from '../service/api.js';
import { botonesEliminar } from './mostrarProductos.js';

const modalEliminarProducto = document.querySelector('.modal-eliminar-producto__background');
const botonSi = document.querySelector('.modal-eliminar-producto__contenedor-botones--yes');
const botonNo = document.querySelector('.modal-eliminar-producto__contenedor-botones--not')

botonesEliminar.forEach(botonEliminar => {
  botonEliminar.onclick = async () => {
    modalEliminarProducto.style.display = 'grid';
    botonSi.addEventListener('click', async () => {
      await eliminarProducto(botonEliminar.parentElement.id);
    });
    botonNo.addEventListener('click', () => {
      modalEliminarProducto.style.display = 'none';
    });
  }
})