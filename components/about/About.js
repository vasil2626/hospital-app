import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Heading from "../Heading/Heading";
import aboutMainImg from "../../Assets/about/about-main.png"

const About = () => {

    const pageTitle = "about us"

    const pageRef = useRef()

    const [aboutHeight, setAboutHeight] = useState()


    useEffect(() => {
        setAboutHeight(pageRef)

    })

    return (
        <section className="about section" ref={pageRef}>
            <div className="container">
                <Heading head="About us" />
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