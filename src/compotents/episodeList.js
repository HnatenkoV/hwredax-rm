import EpisodeCard from "./episodeCard";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getCharacterAsync, getEpisodeAsync, nextPage, prevPage} from "../store/slices/rickAndMorty";




const EpisodeList = () => {
    const episode = useSelector((state) => state.rickmorty.listOfEpisode);
    const {currentPage} = useSelector((state) => state.rickmorty);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEpisodeAsync(currentPage));
    }, [dispatch, currentPage]);

    const nextPageHandler = () => dispatch(nextPage());

    const prevPageHandler = () => dispatch(prevPage());

    return (
        <div className= "hero-list">
            <div>
            {episode.map((episode, index) => (<EpisodeCard key={`episode-${index}`} episode={episode}>{episode.name}</EpisodeCard>))}
            </div>
            <div className="pagination-sec">
                <button className="btn-episode" onClick={prevPageHandler}>Prev</button>
                <button className="btn-episode" onClick={nextPageHandler}>Next</button>
            </div>
        </div>
    )
}


export default EpisodeList