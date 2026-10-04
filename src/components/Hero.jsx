import "/src/styles/Hero.css";
import { FaUnity, FaCode, FaGitAlt } from "react-icons/fa";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-photo">
                <img src="../assets/profile.jpg" alt="Iryna Huryn" />
            </div>

            <div className="hero-content">
                <span className="hero-role">Unity Developer</span>

                <h1>Iryna Huryn</h1>

                <p className="hero-description">
                    I'm a Master's student in Game Technologies. I enjoy creating games because they can give people new experiences and emotions that they wouldn't normally have in everyday life.
                </p>

                <div className="hero-stack">
                    <div>
                        <FaUnity />
                        <span>Unity</span>
                    </div>

                    <div>
                        <FaCode />
                        <span>C#</span>
                    </div>

                    <div>
                        <FaGitAlt />
                        <span>Git</span>
                    </div>
                </div>

                <div className="hero-games">
                    <span className="hero-games-label">Favorite games</span>

                    <div className="hero-games-list">
                        <a
                            href="https://www.stardewvalley.net/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Stardew Valley
                        </a>

                        <a
                            href="https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Spider-Man Remastered
                        </a>

                        <a
                            href="https://store.steampowered.com/app/1604030/V_Rising/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            V Rising
                        </a>

                        <a
                            href="https://store.steampowered.com/app/424840/Little_Nightmares/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Little Nightmares
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;