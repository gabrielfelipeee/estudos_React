import { useParams } from 'react-router-dom';
import './styles.scss';

import posts from '../../mocks/posts.json';

import PostTemplate from '../../components/PostTemplate';



const Post = () => {
    const params = useParams();
    const post = posts.find(post => post.id === Number(params.id));

    return (
        <PostTemplate
            cover={`/assets/posts/${params.id}/cover.png`}
            title={post.title}>

            <div className='box-post'>
            </div>
        </PostTemplate>
    )
};
export default Post;
