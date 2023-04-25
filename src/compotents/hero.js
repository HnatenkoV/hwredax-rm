import React from 'react';
import {useSelector} from "react-redux";



const Hero = () => {
    const hero = useSelector((state) => state.rickmorty.selectedChar);

    return (
        <div style={{padding:"30px"}}>
            <div className="hero-data">
                <img style={{width:"150px", height: "150px"}} src={hero.image} alt=""/>
                <div className="hero-data-txt">
                <h2>{hero.name}</h2>
                <p>{hero.status}</p>
                <p>{hero.species}</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;