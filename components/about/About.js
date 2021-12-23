import Image from "next/image";
import Heading from "../Heading/Heading";
import aboutMainImg from "../../Assets/about/about-main.png"

const About = () => {

    return (
        <section className="about" id="about">
            <div className="container">
                <Heading head="About us" right={true}/>
                <div className="about__content">
                    <Image 
                    src={aboutMainImg} 
                    height={500}
                    width={600} />
                    <div className="about__paragraph">
                        <p className="about__text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
                             explicabo? Obcaecati repellendus placeat asperiores expedita eum,
                             incidunt ad quod veniam ullam ab? Ea maiores assumenda odio ex voluptatem exercitationem voluptatum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About