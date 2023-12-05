import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './styles.scss';

import posts from '../../mocks/posts.json';

import CardPost from '../../components/CardPost';
import PostTemplate from '../../components/PostTemplate';
import NotFouder from '../NotFouder';





const Post = () => {
    const params = useParams();
    const post = posts.find(post => post.id === Number(params.id));



    const recommendedPosts = posts
        .filter(item => item.id !== post.id) // Vai tirar o elemento atual (post)
        .sort((a, b) => b.id - a.id) // Ordenação decrescente
        .slice(0, 4) // Vai mostrar somente 4 elementos 0 ao 3

    if (!post) {
        return <NotFouder />
    }



    return (
        <>
            <PostTemplate
                cover={`/assets/posts/${params.id}/cover.png`}
                title={post.title}>

                <div className='box-post'>
                    <ReactMarkdown>
                        {post.text}
                    </ReactMarkdown>
                </div>
            </PostTemplate>

            <div className="box-recommendedPosts">
                <h2>Outros posts que você pode gostar:</h2>
                <ul>
                    {recommendedPosts.map(item => <li key={item.id}>
                        <CardPost title={item.title} id={item.id} />
                    </li>)}
                </ul>
            </div>

        </>
    )
};
export default Post;
