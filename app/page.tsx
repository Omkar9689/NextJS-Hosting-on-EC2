export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <h1>Cloud & DevOps Engineering</h1>
        <p>
          Building scalable, secure, and automated cloud infrastructure using
          modern DevOps practices.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn primary">Explore Services</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </header>

      <section id="services" className="section">
        <h2>What I Do</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Cloud Infrastructure</h3>
            <p>
              Design and deploy scalable cloud solutions using AWS services such
              as EC2, S3, IAM, and VPC.
            </p>
          </div>

          <div className="card">
            <h3>CI/CD Automation</h3>
            <p>
              Implement automated build and deployment pipelines using Jenkins,
              GitHub Actions, and Docker.
            </p>
          </div>

          <div className="card">
            <h3>DevOps Practices</h3>
            <p>
              Apply infrastructure as code, monitoring, and security best
              practices for reliable systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section light">
        <h2>Why Choose Me</h2>
        <ul className="features">
          <li>Strong foundation in Linux and Cloud fundamentals</li>
          <li>Hands-on AWS and DevOps project experience</li>
          <li>Focus on automation, security, and scalability</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Get in Touch</h2>
        <p>
          Interested in working together or discussing a project?  
          Let’s connect.
        </p>
        <a href="mailto:youremail@example.com" className="btn primary">
          Send Email
        </a>
      </section>

      <footer className="footer">
        <p>© 2026 Cloud & DevOps Portfolio. All rights reserved.</p>
      </footer>
    </main>
  );
}
