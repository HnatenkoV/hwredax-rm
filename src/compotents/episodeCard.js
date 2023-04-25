import '../css/style.css'

const EpisodeCard = (props) => {
    return (
        <div className="episode-card">
            <div className="hero-id">{props.episode.id}</div>
            <div className="hero-name">{props.episode.name}</div>
        </div>
    )
}


export default EpisodeCard