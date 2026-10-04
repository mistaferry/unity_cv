import "/src/styles/ProjectCard.css";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { useState } from "react";

function ProjectCard({
                         image,
                         title,
                         type,
                         description,
                         contribution,
                         tags,
                         github,
                         youtube
                     }) {
    const [expanded, setExpanded] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    function getYoutubeEmbedUrl(url) {
        if (!url) return "";

        const videoId = url.includes("youtu.be/")
            ? url.split("youtu.be/")[1]?.split("?")[0]
            : new URL(url).searchParams.get("v");

        return `https://www.youtube.com/embed/${videoId}`;
    }

    return (
        <article className={`project-card ${expanded ? "expanded" : ""}`}>
            <div className="project-card-content">
                <span className="project-card-type">{type}</span>

                <h3 className="project-card-title">{title}</h3>

                <p className="project-card-description">
                    {description}
                </p>

                <div className="project-card-details">
                    <div className="project-card-contribution">
                        <h4>What I Worked On</h4>

                        <ul>
                            {contribution.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <button
                    className="project-more"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "See less" : "See more"}
                </button>

                <div className="project-card-tags">
                    {tags.map((tag) => (
                        <span className="project-card-tag" key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="project-card-links">
                    {github && (
                        <a href={github} target="_blank" rel="noreferrer">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                    )}

                    {youtube && (
                        <a href={youtube} target="_blank" rel="noreferrer">
                            <FaYoutube />
                            <span>Gameplay</span>
                        </a>
                    )}
                </div>
            </div>

            <div className="project-card-media">
                {showVideo ? (
                    <iframe
                        src={`${getYoutubeEmbedUrl(youtube)}?autoplay=1`}
                        title={`${title} gameplay`}
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <button
                        className="project-video-preview"
                        onClick={() => setShowVideo(true)}
                        aria-label={`Play ${title} gameplay`}
                    >
                        <img src={image} alt={title} />
                        <span className="project-play-button">▶</span>
                    </button>
                )}
            </div>

        </article>
    );
}

export default ProjectCard;