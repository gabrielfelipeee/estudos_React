import axios from "axios";
import { useMutation, useQueryClient } from "react-query"
import { IFoodData } from "../interfaces/IFoodData";

const API_URL = 'http://localhost:3000';

const postFood = async (data: IFoodData) => {
    const response = await axios.post(API_URL + '/foods', data);
    return response;
}
const useFoodAdd = () => {
    const queryClient = useQueryClient();
    const mutateAdd = useMutation({
        mutationFn: postFood,
        mutationKey: ['food-post'],
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })
    return mutateAdd;
}


const deleteFood = async (id: string) => {
    const response = await axios.delete(`${API_URL}/foods/${id}`);
    return response;
}
const useFoodDelete = () => {
    const queryClient = useQueryClient();
    const mutateDelete = useMutation({
        mutationFn: deleteFood,
        mutationKey: ['food-delete'],
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    })
    return mutateDelete;
}

export { useFoodDelete, useFoodAdd }