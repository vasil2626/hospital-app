import { useState } from "react"
import Img from "next/image"
import { useDispatch } from "react-redux"
import { data } from "./data"
import { toggle } from "../../../redux/actions/toggleAction/toggleAction"

const SideTabs = () => {

    const dispatch = useDispatch()

    const [toggleState, setToggleState] = useState(1)

    const handleClick = (item, id) => {
        dispatch(toggle(item))
        console.log(id);
        toggleState !== id ? setToggleState(id):null 
    }

    return (
        <div className="side__tabs">
            <ul className="tabs__list">
                {
                    data.map((items) => {
                        return (
                            <li
                                className={toggleState === items.id? "tabs__items-active" : "tabs__items"}
                                key={items.id}
                                onClick={() => handleClick(items.item, items.id)}
                            >
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