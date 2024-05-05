import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { IFoodResponse } from "../interfaces/IFoodData";

const API_URL = 'http://localhost:3000';

// Retorna uma promise do tipo IFoodData
const fetchData = async (): AxiosPromise<IFoodResponse> => {
    const response = await axios.get<IFoodResponse>(API_URL + '/foods');
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
