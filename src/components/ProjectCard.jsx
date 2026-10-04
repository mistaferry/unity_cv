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
                <img src={image} alt={title} />
            </div>

        </article>
    );
}

export default ProjectCard;