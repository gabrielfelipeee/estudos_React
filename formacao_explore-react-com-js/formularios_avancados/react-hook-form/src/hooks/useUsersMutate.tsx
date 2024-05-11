import axios from "axios";
import { useMutation } from "react-query";
import { IDataForm } from "../interfaces/IDataForm";

const BASE_URL = 'http://localhost:3000';

const postUser = async (data: IDataForm) => {
    const response = await axios.post(`${BASE_URL}/users`, data);
    return response;
}

const useUserAdd = () => {
    const mutate = useMutation({
        mutationFn: postUser,
        mutationKey: ['add-user']
    })
    return mutate;
}
export { useUserAdd }
