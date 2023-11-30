import './styles.scss';

import Button from '../Button';

const Banner = () => {
    return (
        <div className='box-banner'>
            <h1>Hello, world!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
            </p>
            <Button buttonValue="Explorar" />
            <img src='https://via.placeholder.com/150x150' alt='avatar'></img>
        </div>
    )
};
export default Banner;
