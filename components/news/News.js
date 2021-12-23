import Img from "next/image";
import Heading from "../Heading/Heading"
import {data} from "./data"

const News = () => {

    return (
        <section className="news" id="news" >
            <div className="container">
                <Heading head="news" />
                <div className="news__content">
                {
                    data.map((news) =>{
                        return(
                            <div className="news__blocks" key={news.id}>
                            <Img src={news.img} />
                            <h1 className="title">{news.title}</h1>
                            <p className="News__description">
                               {news.description}
                            </p>
                            <button className="news__button">
                                see more
                            </button>
                        </div>
                        );
                    })
                }
                </div>
               
             
            </div>
        </section>
    );
}

export default News