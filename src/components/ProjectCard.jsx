import "/src/styles/ProjectCard.css";
import { FaGithub, FaYoutube } from "react-icons/fa";

function ProjectCard({ image, title, description, tags, github, youtube }) {
    return (
        <div className="project-card">
            <img className="project-card-image" src={image} alt={title} />

            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>

                <p className="project-card-description">
                    {description}
                </p>

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
                        </a>
                    )}

                    {youtube && (
                        <a href={youtube} target="_blank" rel="noreferrer">
                            <FaYoutube />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;