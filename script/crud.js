import axios from "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
// implementacion de axios//
//se crea una const para encapsular url de la api 👍//
const URLProducts = "http://localhost:3000/productos";
const URLCategorias = "http://localhost:3000/categorias";
const URLClientes = "http://localhost:3000/informacionCliente";

const getAll = async() => {
    try {
        let resp = await axios.get(URLProducts),
        json = await resp.data;
        console.log(json);
    } catch (error) {
        console.error("Error en la pagina",error);
    }
}
document.addEventListener("DOMContentLoaded", getAll);


