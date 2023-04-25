import HeroCard from "./heroCard";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Hero from "./hero";
import React from "react";
import {getCharacterAsync, nextPage, prevPage} from "../store/slices/rickAndMorty";


const HeroList = () => {
    const heroes = useSelector((state) => state.rickmorty.listOfChar);
    const hero = useSelector((state) => state.rickmorty.selectedChar);
    const {currentPage} = useSelector((state) => state.rickmorty);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacterAsync(currentPage));
    }, [dispatch, currentPage]);

    const nextPageHandler = () => dispatch(nextPage());

    const prevPageHandler = () => dispatch(prevPage());
    return (
        <div className= "hero-list">
            <Hero hero={hero}/>
            <div>
            {heroes.map((hero, index) => (
                    <HeroCard key={`hero-${index}`} hero={hero}>{hero.name}</HeroCard>))}
                <button onClick={prevPageHandler}>Prev</button>
                <button onClick={nextPageHandler}>Next</button>
            </div>

        </div>
    )
}


export default HeroList