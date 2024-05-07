import { useFoodDelete } from "./useFoodMutate";

const useCard = () => {
    const { mutate: mutateDelete } = useFoodDelete();

    const deleteFood = (name: string, id: string) => {
        confirm(`Você realmente deseja excluir ${name} do cardápio?`) &&
            mutateDelete(id);
    };

    return {
        deleteFood
    }
}
export default useCard;