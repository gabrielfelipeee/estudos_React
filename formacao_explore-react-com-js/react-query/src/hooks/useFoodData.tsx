import axios from "axios";
import { useQuery } from "react-query";

const API_URL = 'http://localhost:3000';

// Retorna uma promise do tipo IFoodData
const fetchData = async () => {
    const response = await axios.get(API_URL + '/foods');
    return response;
}


const useFoodData = () => {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],  // Chave única da requisição
    });

    return {
        ...query, // Retorna tudo do query...
        data: query.data?.data  // ...mas quando for retornar o data, será desta maneira
        // query.data? é do pŕoprio react-query, e o outro data é o do axios com os dados
    }
}
export default useFoodData;
