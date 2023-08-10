import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
// URL declarada
const URLProductos = "http://localhost:3000/productos/"
//Función de axios que permite conectar con la URL
export const infoProductos = async () => {
    try {
        const data = await axios.get(`${URLProductos}`)
        return data.data
    } catch (error) {
        console.log(error);
        return[]
    }
}

