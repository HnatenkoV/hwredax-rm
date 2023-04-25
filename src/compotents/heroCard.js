import '../css/style.css'
import {useDispatch} from "react-redux";
import {getCharacterByIdAsync} from "../store/slices/rickAndMorty";

const HeroCard = (props) => {
    const dispatch = useDispatch();

    return (

        <div className="hero-card" onClick={() =>
            dispatch(getCharacterByIdAsync(props.hero.id))} >
            <div className="hero-id">{props.hero.id}</div>
            <div className="hero-name">{props.hero.name}</div>
        </div>
    )
}


export default HeroCard