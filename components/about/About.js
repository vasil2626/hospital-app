import { useSelector } from "react-redux";
import Image from "next/image";
import Heading from "../Heading/Heading";
import aboutMainImg from "../../Assets/about/about-main.png"

const About = () => {


    const { message } = useSelector(state => state.getGlobalsReducer.data || {})
 

    return (
        <section className="about" id="about">
            <div className="container">
                <Heading head="About us" right={true} />
                <div className="about__content">
                    <div  className="about__content-image-container">
                        <img src={message?.about_image.value} alt="about-image" className="about__content-image" />
                    </div>
                    <div className="about__paragraph">
                        <p className="about__text">
                            {message?.about_text.value}
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                .about__paragraph{
                width: 38%;
                 background-image: url(${message?.about_b_image.value}); 
                background-repeat: no-repeat;
                background-size: contain;
                margin-top: 100px;
        }

        @media screen and (max-width: 1200px) {
                    .about__paragraph{
                     background: none;
                     width: 100%;
                     margin-top: 0;
                    }
        }
                `}
            </style>

        </section>
    );
}

export default About