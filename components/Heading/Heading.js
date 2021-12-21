import { useState, useEffect, useRef, useCallback } from "react";
import AOS from 'aos';

const Heading = ({ head, elementHeight }) => {

    // const letters = head.split("")

    // const [headOpen, setHeadOpen] = useState(false)
    // const [reval, setReval] = useState([])

    // const handleScroll = (e) => {
    //     console.log(reval[0]?.clientHeight);


    // }

    // const handleScroll = useCallback(() =>{
    //     console.log(reval[0].clientTop);
    // },[reval])

    // useEffect(() => {

    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll)
    //     }

    // })

    // useEffect(() => {
    //     const elements = document.querySelectorAll(".section")
    //     for (let i = 0; i < elements.length; i++) {
    //         setReval( prev => [...prev, [elements[i]]] )
    //     }

    // },[])


    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            // startEvent: "someCoolEvent"

        })

    })


    return (
        <div className="section__headings animated" >
            {/* {
                letters.map((items, index) => {
                    return (
                        // <h1 className={headOpen ? "heading__items-open" : "heading__items"} key={index} data-aos="fade-left">
                         <h1 className={"heading__items-open"} key={index} data-aos="fade-left">
                            {items}
                        </h1>
                    );
                })
            } */}
            <h1 className="heading__items-open" data-aos="fade-left">
                {head}
            </h1>
        </div>
    );
}


export default Heading