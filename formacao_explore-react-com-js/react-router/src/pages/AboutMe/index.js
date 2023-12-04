import './styles.scss';

import cover from '../../assets/about-me-cover.png';


import PostTemplate from '../../components/PostTemplate';



const AboutMe = () => {
    return (
        <PostTemplate className="box-about-me"
            cover={cover}
            title="About me"
        >
            <div className='box-about-me'>
                <h3>Hello, my name is ...</h3>

                <img src='https://placehold.co/250x250' alt="Minha foto" />

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut mauris vitae ante imperdiet eleifend. Integer vitae felis a lorem tincidunt consequat. Quisque euismod euismod lorem, eu dapibus libero consequat non. Nulla facilisi. Etiam tincidunt felis
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut mauris vitae ante imperdiet eleifend. Integer vitae felis a lorem tincidunt consequat. Quisque euismod euismod lorem, eu dapibus libero consequat non. Nulla facilisi. Etiam tincidunt felis vitae diam ultricies, a gravida turpis tristique. Sed eu nunc eget magna ullamcorper laoreet. Nullam molestie fermentum turpis, non ultricies tortor. Sed consequat erat id libero vestibulum, eu bibendum justo volutpat. Maecenas sed placerat purus. Nunc convallis justo at nisi commodo, sit amet fermentum elit consequat. Sed vitae
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut mauris vitae ante imperdiet eleifend. Integer vitae felis a lorem tincidunt consequat. Quisque euismod euismod lorem, eu dapibus libero consequat non. Nulla facilisi. Etiam tincidunt felis vitae diam ultricies, a gravida turpis tristique. Sed eu nunc eget magna ullamcorper laoreet. Nullam molestie fermentum turpis, non ultricies tortor. Sed consequat erat id libero vestibulum, eu bibendum justo volutpat. Maecenas sed placerat purus. Nunc convallis
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut mauris vitae ante imperdiet eleifend. Integer vitae felis a lorem tincidunt consequat. Quisque euismod euismod lorem, eu dapibus libero consequat non. Nulla facilisi. Etiam tincidunt felis vitae diam ultricies, a gravida turpis tristique. Sed eu nunc eget magna ullamcorper laoreet. Nullam molestie fermentum turpis, non ultricies tortor. Sed consequat erat id libero vestibulum, eu bibendum justo volutpat. Maecenas sed placerat purus. Nunc convallis sum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut mauris vitae ante imperdiet eleifend. Integer vitae felis a lorem tincidunt consequat. Quisque euismod euismod lorem, eu dapibus libero consequat non. Nulla facilisi. Etiam tincidunt felis vitae diam ultricies, a gravida turpis trist
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed ut mauris vitae ante imperdiet eleifend. Integer vitae felis a lorem tincidunt consequat. Quisque euismod euismod lorem, eu dapibus libero consequat non. Nulla facilisi. Etiam tincidunt felis vitae diam ultricies, a gravida turpis tristique. Sed eu nunc eget magna ullam
                </p>
            </div>

        </PostTemplate>


    )
};
export default AboutMe;
