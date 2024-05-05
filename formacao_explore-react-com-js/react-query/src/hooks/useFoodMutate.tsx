import axios from "axios";
import { useMutation, useQueryClient } from "react-query"
import { IFoodData } from "../interfaces/IFoodData";

const API_URL = 'http://localhost:3000';

const postFood = async (data: IFoodData) => {
    const response = await axios.post(API_URL + '/foods', data);
    return response;
}

const useFoodMutate = () => {
    const queryClient = useQueryClient();

    const mutate = useMutation({
        mutationFn: postFood,
        mutationKey: ['foodPost'],
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })
    return mutate
}
export default useFoodMutate;
