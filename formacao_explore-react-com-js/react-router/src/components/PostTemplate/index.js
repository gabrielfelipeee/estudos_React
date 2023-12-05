import './styles.scss';


import CardPost from '../CardPost';

const PostTemplate = (props) => {
    return (
        <article className="box-post-template">
            <div className='cover'
                style={{ backgroundImage: `url(${props.cover})`}}
            ></div>

            <h2>{props.title}</h2>

            <>
                {props.children}
            </>

            
        </article>
    )
}
export default PostTemplate;
