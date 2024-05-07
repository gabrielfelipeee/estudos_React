import './styles.scss';
import Card from '../../components/Card';
import Form from '../../components/Form';
import useFoodData from '../../hooks/useFoodData';
import { IFoodData } from '../../interfaces/IFoodData';
import { CardProvider } from '../../context/CardContext';
import { FormProvider } from '../../context/FormContext';
import useHome from '../../hooks/useHome';


const Home = () => {
    const {openModal, closeModal, controllerModal} = useHome();
    const { data, isLoading, isError } = useFoodData();

    return (
        <div className="box-home">
            <div className="box-cards">
                {isLoading && <p>Carregando</p>}
                {isError && <p>Erro</p>}
                {
                    !isLoading &&
                    data?.map((item: IFoodData) => {
                        return <CardProvider key={item.id}>
                            <Card {...item} />
                        </CardProvider>
                    })
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
                <FormProvider>
                    <Form controlModal={closeModal} />
                </FormProvider>
            </div>
        </div>
    )
}
export default Home;


