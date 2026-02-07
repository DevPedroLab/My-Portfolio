import ShinyText from "./ShinyText.tsx";

export const ProjectsContent = () => (
        <section className="projects-section">
          <h1 id="main-title" className="header-title">My Projects</h1>
          <div className="projects-board">
            <div className="project-container">
              <h1 className="header-title">
                <ShinyText
                  text="ORBix Game"
                  speed={5}
                  delay={0}
                  color="#825fbf"
                  shineColor="#B18EEF"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
               </h1>
              <p className="description">ORBix Game is a game that you need to survive. Made with HTML/CSS/JS. See more on: <a href="https://devpedrolab.github.io/ORBix-Game/" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
              <img src="/assets/ORBix-Game.png" alt="ORBix Game Project Screenshot" />
            </div>

            <div className="project-container">
              <h1 className="header-title">
                <ShinyText
                  text="Groomy Design"
                  speed={5}
                  delay={0}
                  color="#825fbf"
                  shineColor="#B18EEF"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
               </h1>
              <p className="description">Groomy Design is a website of design services. Made with HTML/CSS/JS. See more on: <a href="https://devpedrolab.github.io/Groomy-Design/" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
              <img src="/assets/Groomy-Design.png" alt="Groomy Design Project Screenshot" />
            </div>

            <div className="project-container">
              <h1 className="header-title">
                <ShinyText
                  text="Big Slice"
                  speed={5}
                  delay={0}
                  color="#825fbf"
                  shineColor="#B18EEF"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
              </h1>
              <p className="description">Big Slice is a website of a pizzeria restaurant. Made with React/Typescript. See more on: <a href="https://big-slice.vercel.app/" target="_blank" rel="noopener noreferrer">Vercel</a>.</p>
              <img src="/assets/Big-Slice.png" alt="Big Slice Project Screenshot" />
            </div>
          </div>
        </section>
);