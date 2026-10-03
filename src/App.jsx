import ProjectCard from "./components/ProjectCard";

function App() {
  return (
      <ProjectCard
          image="src/assets/dragon_soup_logo_bg.png"
          title="Dragon Soup"
          description="A fantasy tavern management game developed in Unity."
          tags={["Unity", "C#", "Game Development"]}
          github="https://github.com/DLuckYD/dragon-soup-game"
          youtube="https://www.youtube.com/watch?si=y4kyKYZ12CvHMw2M&v=Md8u-3zo31Y&feature=youtu.be"
      />
  );
}

export default App;