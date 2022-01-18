import Heading from "../Heading/Heading"
import { data } from "./data"
import { Button } from "../button/button";
import { useSelector } from "react-redux";

const News = () => {

    const { news } = useSelector(state => state.getNewsReducer)


    return (
        <section className="news" id="news" >
            <div className="container">
                <Heading head="news" />
                <div className="news__content">
                    {
                        news.message?.map((news) => {
                            return (
                                <div className="news__blocks" key={news.id}>
                                    <img src={news.image} alt="news-img" />
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