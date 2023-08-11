import { crearProducto } from "../service/api.js";

const botonAgregar = document.querySelector('.agregar');
const nombre = document.querySelector('.nombre')
const precio = document.querySelector('.precio')
const descripcion = document.querySelector('.descripcion')
const imagenUno = document.querySelector('.imagenUno')
const imagenDos = document.querySelector('.imagenDos')
const imagenTres = document.querySelector('.imagenTres')
const imagenCuatro = document.querySelector('.imagenCuatro')


botonAgregar.addEventListener('click', async event => {
  event.preventDefault();

  const nuevoProducto = {
    nombre: nombre.value,
    precio: precio.value,
    descripcion: descripcion.value,
    img: {
      imagenUno: imagenUno.value,
      imagenDos: imagenDos.value,
      imagenTres: imagenTres.value,
      imagenCuatro: imagenCuatro.value
    } 
  }
  await crearProducto(nuevoProducto);
});
