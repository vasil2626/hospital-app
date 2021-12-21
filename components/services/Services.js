import Heading from "../Heading/Heading"
import SoSimilar from "./ Similar/ Similar"
import { data } from "./data"


const Services = () => {

    return (
        <section className="services section" >
            <div className="container">
                <Heading
                    head="services"
                    right={true}
                />  
                <SoSimilar data={data} />
            </div>
        </section>
    )
}

export default Services