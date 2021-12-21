import Img from "next/image";
import img from "../../../Assets/similar/papers.svg"

const Similar = ({ data }) => {

    return (
        <div className="similar">
            {
                data.map((data) => {
                    return (
                        <div className="similar__content" key={data.id}>
                            <Img src={data.img} />
                            <div className="similar__text">
                                <h1 className="similar__title">{data.title}</h1>
                                <p className="similar__description">
                                   {data.description}
                                </p>
                                <button className="similar__button">
                                    see more
                                </button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Similar