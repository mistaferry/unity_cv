import ProjectCard from "./ProjectCard";

function Projects(){
    const projects = [
        {
            id: 1,
            image: "src/assets/dragon_soup_cover.png",
            title: "Dragon Soup",
            type: "University Team Project",
            description: "Dragon Soup is a fantasy tavern management game developed as a long-term university team project. The player manages a tavern while searching for a cure to a mysterious disease, sending adventurers on quests, collecting ingredients and cooking recipes.",
            contribution: [
                "Player movement, hotbar and item interaction systems",
                "Cooking and progression systems",
                "Game menus and save/load system",
                "Git workflow, merge conflict resolution and feature integration",
                "Gameplay testing and bug fixing"
            ],
            tags: ["Unity", "C#", "Game Development"],
            github: "https://github.com/DLuckYD/dragon-soup-game",
            youtube: "https://www.youtube.com/watch?v=Md8u-3zo31Y"
        },
        {
            id: 2,
            image: "src/assets/fishy_game_cover.jpg",
            title: "Fishy Game",
            type: "University Team Project",
            description: "Fishy Game is a horde survival game where the player explores different ocean depths, fights increasingly dangerous enemies and develops their character through passive progression and upgrades. The game is controlled using a custom-built hardware controller with buttons, sliders, screen and LEDs.",
            contribution: [
                "Enemy progression and spawning systems",
                "Enemy navigation and horde behavior",
                "Player passive progression",
                "Player health and upgrade systems"
            ],
            tags: ["Unity", "C#", "Arduino"],
            github: "https://github.com/DLuckYD/Fishy-Game",
            youtube: "https://youtu.be/YpTqSrJ9CFw"
        },
        {
            id: 3,
            image: "src/assets/last_try_cover.png",
            title: "Last Try",
            type: "University Team Project",
            description: "Last Try is an experimental strategy game built around eye tracking as the primary input method. The player must quickly observe and memorize available soldiers, assemble an army and make decisions under time pressure using their gaze to interact with the game.",
            contribution: [
                "Implementation of all core gameplay systems",
                "Tobii Eye Tracker 5 integration for gaze-based gameplay"
            ],
            tags: ["Unity", "C#", "Eye Tracking"],
            github: "https://github.com/DLuckYD/last-try-game",
            youtube: "https://www.youtube.com/watch?v=XY3OSFbURMw"
        }
    ];

    return (
        <section className="projects-section">
            <div className="section-header">
                <h2>Projects</h2>
                <p>A selection of games and interactive projects I've worked on</p>
            </div>

            <div className="projects">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        type={project.type}
                        description={project.description}
                        contribution={project.contribution}
                        tags={project.tags}
                        github={project.github}
                        youtube={project.youtube}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;