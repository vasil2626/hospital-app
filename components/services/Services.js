import {useEffect} from "react"
import Heading from "../Heading/Heading"
import Similar from "./ Similar/ Similar"
import { data } from "./data"

import { useSelector } from "react-redux";


const Services = () => {

    const {services} = useSelector(state => state.getServiceReducer)


    return (
        <section className="services" id="services" >
            <div className="container">
                <Heading
                    head="services"
                    right={true}
                />  
                <Similar data={services} />
            </div>
        </section>
    )
}

export default Services