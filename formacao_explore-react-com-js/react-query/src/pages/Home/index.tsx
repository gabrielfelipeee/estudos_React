import './styles.scss';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Form from '../../components/Form';
import useFoodData from '../../hooks/useFoodData';
import { IFoodData, IFoodResponse } from '../../interfaces/IFoodData';


const Home = () => {
    const [controllerModal, setControllerModal] = useState("hide");
    const openModal = () => {
        setControllerModal("");
    }
    const closeModal = () => {
        setControllerModal("hide");
    }
    useEffect(() => {
        const body = document.body;
        controllerModal === "" ? body.classList.add("body-hidden") : "";

        return () => {
            body.classList.remove("body-hidden");
        }
    }, [controllerModal]);


    const { data, isLoading, isError } = useFoodData();

    return (
        <div className="box-home">
            <div className="box-cards">
                {isLoading && <p>Carregando</p>}
                {isError && <p>Erro</p>}
                {
                    !isLoading &&
                    data?.map((item: IFoodData) => <Card key={item.id} {...item} />)
                }

            </div>

            <button
                className="btn-add"
                onClick={openModal}
            >
                Adicionar
            </button>

            <div
                className={`fade ${controllerModal}`}
                onClick={closeModal}
            ></div>

            <div className={`modal ${controllerModal}`}>
                <Form control={closeModal} />
            </div>
        </div>
    )
}
export default Home;


