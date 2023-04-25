import HeroCard from "./heroCard";
import {useSelector} from "react-redux";
import Hero from "./hero";
import React from "react";


const HeroList = () => {
    const heroes = useSelector((state) => state.rickmorty.listOfChar);
    const hero = useSelector((state) => state.rickmorty.selectedChar);

    return (
        <div className= "hero-list">
            <Hero hero={hero}/>
            <div>
            {heroes.map((hero, index) => (
                    <HeroCard key={`hero-${index}`} hero={hero}>{hero.name}</HeroCard>))}
            </div>
        </div>
    )
}


export default HeroList