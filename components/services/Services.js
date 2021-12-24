import Heading from "../Heading/Heading"
import Similar from "./ Similar/ Similar"
import { data } from "./data"


const Services = () => {

    return (
        <section className="services" id="services" >
            <div className="container">
                <Heading
                    head="services"
                    right={true}
                />  
                <Similar data={data} />
            </div>
        </section>
    )
}

export default Services