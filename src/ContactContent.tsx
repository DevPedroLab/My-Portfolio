import ShinyText from "./ShinyText";

export const ContactContent = () => (
    <section className="contact-section">
    <h1 id="main-title" className="header-title">Interested? Contact me!</h1>
    
    <div className="contact-board">
        <div className="contact-card">
            <div className="contact-icon"><span className="fa-solid fa-rocket"></span></div>
            <h2 className="contact-title">
                <ShinyText
                  text="Fast & Affordable"
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
            </h2>
            <p className="contact-description">Full-stack projects from <strong>~$150-$200.</strong> Delivery in <strong>7-14 days.</strong> Clean code.</p>
        </div>
        
        <div className="contact-card">
            <div className="contact-icon"><span className="fa-solid fa-message"></span></div>
            <h2 className="contact-title">
                <ShinyText
                  text="Quick Contact"
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
            </h2>
            <p className="contact-description">I reply within <strong>6-12 hours.</strong> Let's discuss your project on Fiverr.</p>
        </div>
        
        <div className="contact-card">
            <div className="contact-icon"><span className="fa-solid fa-shield"></span></div>
            <h2 className="contact-title">
                <ShinyText
                  text="Risk-Free Process"
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
            </h2>
            <p className="contact-description"><strong>50% upfront, 50% on delivery.</strong> Your satisfaction guaranteed.</p>
        </div>
    </div>
    
    <div className="contact-actions">
        <a href="https://www.fiverr.com/devpedro__/" target="_blank" rel="noopener noreferrer" className="contact-button secondary">
            <span aria-hidden="true" className="fa-solid fa-briefcase"></span> View Fiverr
        </a>
    </div>
    
    <div className="faq-section">
        <h2 className="faq-title">Common Questions</h2>
        <div className="faq-grid">
            <div className="faq-item">
                <h3>
                <ShinyText
                  text="What's included?"
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
                </h3>
                <p>You can see on my Fiverr which package works better for you.</p>
            </div>
            <div className="faq-item">
                <h3>
                <ShinyText
                  text="What about hosting costs?"
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
                </h3>
                <p>I use free-tier services (Vercel, Render). For custom domains/paid services, you cover those costs.</p>
            </div>
            <div className="faq-item">
                <h3>
                <ShinyText
                  text="I can see progress updates?"
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
                </h3>
                <p>Yes! You can contact me everytime to track development in real-time.</p>
            </div>
            <div className="faq-item">
                <h3>
                <ShinyText
                  text="What if I need changes?"
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
                </h3>
                <p>The number of revisions varies for each package. The revisions is used only during development.</p>
            </div>
        </div>
    </div>
</section>
);