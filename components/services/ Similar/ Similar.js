import Image from "next/image";
import { Button } from "../../button/button";

const Similar = ({ data }) => {


    return (
        <div className="similar">
            <>
            {
                data.message?.map((data) => {
                    return (
                        <div className="similar__content" key={data.id}>
                            <img src={data.image} alt="service-image" />
                            <div className="similar__text">
                                <h1 className="similar__title">{data.title}</h1>
                                <p className="similar__description">
                                    {data.description}
                                </p>
                                <Button name="see more" />
                            </div>
                        </div>
                    );
                })
            }
            </>
            

        </div>
    );
}



export default Similar