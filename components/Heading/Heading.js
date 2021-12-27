import { useEffect } from "react";
import AOS from 'aos';

const Heading = ({ head, right }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',

        })

    })

    return (
        <div className={right?"section__headings": "section__heading-left"} >
            <h1 className="heading__items-open" data-aos={right?"fade-left": "fade-right"}>
                {head}
            </h1>
        </div>
    );
}


export default Heading