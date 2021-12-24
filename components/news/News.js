import Img from "next/image";
import Heading from "../Heading/Heading"
import {data} from "./data"
import { Button } from "../button/button";

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
                            <Button name="see more" />
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