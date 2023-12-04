import './styles.scss';

import posts from '../../mocks/posts.json';


import CardPost from '../../components/CardPost';


const Home = () => {
    return (
        <main className="box-home">
            <ul>
                {posts.map(item => <li key={item.id}>
                    <CardPost id={item.id} title={item.title} />
                </li>)}
            </ul>
        </main>
    )
};
export default Home;
