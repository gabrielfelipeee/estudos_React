import './styles.scss';
import { useNavigate } from 'react-router-dom';


import imageError from '../../assets/error-404.png'

import Button from '../../components/Button';

const NotFouder = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="box-not-fouder">
                <span>404</span>
                <h1>Page not fouder</h1>
                <p>
                    Are you sure this is what you were looking for? Please wait a moment and refresh the page, or return to the homepage.
                </p>

                <Button
                    buttonValue="Back to Home"
                    buttonSize="large"
                    event={() => navigate(-1)} // -1 volta para última página
                />

                <img src={imageError} alt="Erro" />

            </div>
            <div className='space'></div>
        </>
    )
}
export default NotFouder;
