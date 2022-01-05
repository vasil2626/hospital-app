import Img from "next/image"
import { useDispatch } from "react-redux"
import { data } from "./data"
import {toggle} from "../../../redux/actions/toggleAction/toggleAction"

const SideTabs = () => {

    const dispatch = useDispatch()

    const handleClick = (item) =>{
        dispatch(toggle(item))
    }

    return (
        <div className="side__tabs">
            <ul className="tabs__list">
                {
                    data.map((items) => {
                        return (
                            <li className="tabs__items" key={items.id} onClick={() => handleClick(items.item)}>
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