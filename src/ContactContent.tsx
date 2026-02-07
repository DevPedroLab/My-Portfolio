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
            <p className="contact-description">Full-stack projects from <strong>~$80</strong>. Delivery in <strong>5-7 days</strong>. Clean code with 7-day support included.</p>
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
            <p className="contact-description">I reply within <strong>6-12 hours</strong>. Let's discuss your project via email or on Fiverr.</p>
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
            <p className="contact-description"><strong>50% upfront, 50% on delivery</strong>. Unlimited revisions during development. Your satisfaction guaranteed.</p>
        </div>
    </div>
    
    <div className="contact-actions">
        <a href="mailto:pedro.a.rodrigues7@gmail.com" className="contact-button primary">
            <span aria-hidden="true" className="fa-solid fa-envelope"></span> Send Email
        </a>
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
                <p>Frontend + Backend, database setup (free tier), deployment, and 7-day support.</p>
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
                <p>Yes! You get access to my contact to track development in real-time.</p>
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
                <p>Unlimited revisions during development. After delivery, minor fixes are free for 7 days.</p>
            </div>
        </div>
    </div>
</section>
);