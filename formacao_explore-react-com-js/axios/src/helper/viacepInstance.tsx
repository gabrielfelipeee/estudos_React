import axios from "axios";

const viacepInstance = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})
export default viacepInstance;
