import EpisodeCard from "./episodeCard";
import { useSelector } from "react-redux";




const EpisodeList = () => {
    const episode = useSelector((state) => state.rickmorty.listOfEpisode);

    return (
        <div className= "hero-list">
            <div>
            {episode.map((episode, index) => (<EpisodeCard key={`episode-${index}`} episode={episode}>{episode.name}</EpisodeCard>))}
            </div>
        </div>
    )
}


export default EpisodeList