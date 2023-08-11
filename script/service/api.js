import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
// URL declarada
const BASE_URL = 'http://localhost:3000';
//Función de axios que permite conectar con la URL
export const mostrarProductos = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/productos/`)
        return response.data;
    } catch (error) {
        console.error(error);
        return[]
    }
}

export const crearProducto = async (body) => {
    try {
        const response = await axios.post(`${BASE_URL}/productos/`, body);
        return response;
    } catch (error) {
        console.error(error);
    }
}


export const editarProducto = async (id, body) => {
    try {
        const response = await axios.put(`${BASE_URL}/productos/${id}`, body);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const eliminarProducto = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/productos/${id}`);
        return true;
    } catch (error) {
        console.error(error);
    }
}
