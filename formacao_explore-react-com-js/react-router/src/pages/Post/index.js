import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './styles.scss';

import posts from '../../mocks/posts.json';


import PostTemplate from '../../components/PostTemplate';
import NotFouder from '../NotFouder';



const Post = () => {
    const params = useParams();
    const post = posts.find(post => post.id === Number(params.id));

    if (!post) {
        return <NotFouder />
    }

    return (
        <PostTemplate
            cover={`/assets/posts/${params.id}/cover.png`}
            title={post.title}>

            <div className='box-post'>
                <ReactMarkdown>
                    {post.text}
                </ReactMarkdown>
            </div>
        </PostTemplate>
    )
};
export default Post;
