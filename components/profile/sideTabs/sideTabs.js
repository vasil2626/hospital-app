import Img from "next/image"
import { data } from "./data"

const SideTabs = () => {
    return (
        <div className="side__tabs">
            <ul className="tabs__list">
                {
                    data.map((items) => {
                        return (
                            <li className="tabs__items" key={items.id}>
                                <Img src={items.img} width={20} height={20} />
                                <span className="tab__item">{items.item}</span>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default SideTabs