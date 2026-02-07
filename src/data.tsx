import ShinyText from "./ShinyText.tsx";

export const shiny_stack_text = () => (
    <p className="description my-stack">
      <ShinyText
        text="- Fullstack Developer & Software Engineer"
        speed={5}
        delay={0}
        color="#c0c0c0"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
      />
    </p>
);

export const data = {
    "structure": {
        "profile-card": 
      <section className="main-info-container profile-card">
        <div className="icons-container">
            <span onClick={() => {
              location.href = "https://github.com/DevPedroLab/";
            }} aria-label="My GitHub" className="fa-brands fa-github"></span>
            <span onClick={() => {
              location.href = "https://www.linkedin.com/in/pedro-antonio-rodrigues-7310302b2/";
            }} aria-label="My LinkedIn" className="fa-brands fa-linkedin"></span>
        </div>
        <div className="main-info-subcontainer">
          <img src="/assets/react.svg" alt="My photo" className="my-image" />
          <h1 className="header-title my-name">Pedro A. Rodrigues</h1>
        </div>
        {shiny_stack_text()}
        <span className="tag"><span className="material-symbols-outlined tag-icon">radio_button_checked</span> Online</span>
        
      </section>,

      "skills-section": 
      <section className="skills-section">
          <h1 id="main-title" className="header-title">My Skills</h1>
          <div className="skills-board">
              <div className="skill-container">
                <img src="/assets/git.svg" alt="Git image" />
                <h1 className="header-title">Git</h1>
                <p className="description">Version control system for tracking changes and collaborating on code across branches and commits.</p>
              </div>

              <div className="skill-container">
                <img src="/assets/github.svg" alt="GitHub image" />
                <h1 className="header-title">GitHub</h1>
                <p className="description">Cloud hosting for Git repositories with pull requests, issue tracking and CI/CD integrations.</p>
              </div>

              <div className="skill-container">
                <img id="html-img" src="/assets/html.webp" alt="HTML image" />
                <h1 className="header-title">HTML</h1>
                <p className="description">Markup language used to structure web content and define semantic elements for browsers.</p>
              </div>

              <div className="skill-container">
                <img src="/assets/css.png" alt="CSS image" />
                <h1 className="header-title">CSS</h1>
                <p className="description">Style sheet language for designing layout, visuals, and responsive interfaces across devices.</p>
              </div>

              <div className="skill-container">
                <img src="/assets/js.png" alt="JavaScript image" />
                <h1 className="header-title">JavaScript</h1>
                <p className="description">High-level scripting language for interactive web behavior, DOM manipulation and async logic.</p>
              </div>

              <div className="skill-container">
                <img src="/assets/react.svg" alt="React image" />
                <h1 className="header-title">React</h1>
                <p className="description">Component-based UI library for building declarative, reusable interfaces with a virtual DOM.</p>
              </div>

              <div className="skill-container">
                <img src="/assets/typescript.svg" alt="TypeScript image" />
                <h1 className="header-title">TypeScript</h1>
                <p className="description">Typed superset of JavaScript that adds static types for safer, scalable codebases.</p>
              </div>

              <div className="skill-container">
                <img src="/assets/nodejs.svg" alt="NodeJS image" />
                <h1 className="header-title">Node.js</h1>
                <p className="description">JavaScript runtime for building server-side applications, APIs, and tooling with npm.</p>
              </div>

              <div className="skill-container">
                <img src="/assets/sql.svg" alt="SQL image" />
                <h1 className="header-title">SQL</h1>
                <p className="description">Query language for managing and retrieving relational data from databases.</p>
              </div>

              <div className="skill-container">
                <img src="/assets/bash.png" alt="Bash image" />
                <h1 className="header-title">Bash</h1>
                <p className="description">Shell scripting for automating tasks, file operations, and system workflows.</p>
              </div>

              <div className="skill-container">
                <img src="/assets/python.png" alt="Python image" />
                <h1 className="header-title">Python</h1>
                <p className="description">High-level language for scripting, data processing, and rapid prototyping across domains.</p>
              </div>

              <div className="skill-container">
                <img id="api-img" src="/assets/api.svg" alt="API image" />
                <h1 className="header-title">APIs</h1>
                <p className="description">Interfaces that allow systems to communicate, expose data and integrate services programmatically.</p>
              </div>

              <div className="skill-container">
                <img id="figma-img" src="/assets/figma.svg" alt="Figma image" />
                <h1 className="header-title">Figma</h1>
                <p className="description">Collaborative design tool for UI/UX prototypes, vector editing, and design handoffs.</p>
              </div>
          </div>
      </section>
    }
};