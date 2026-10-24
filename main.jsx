import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const API_URL = "http://localhost:5000/api";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [apiStatus, setApiStatus] = useState("Checking API...");

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          setApiStatus("API Connected");
        }
      })
      .catch(() => {
        setApiStatus("API Offline");
      });
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* NAVBAR */}

      <nav className="navbar">

        <div
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          Food<span>Loop</span>
        </div>

        <div className="nav-links">

          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("problem")}>
            Problem
          </button>

          <button onClick={() => scrollToSection("solution")}>
            Solution
          </button>

          <button onClick={() => scrollToSection("features")}>
            Features
          </button>

          <button onClick={() => scrollToSection("technology")}>
            Technology
          </button>

        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </nav>


      {/* HERO */}

      <section id="home" className="hero">

        <div className="hero-content">

          <div className="badge">
            🌱 Sustainable Food Management
          </div>

          <h1>
            Turning Surplus Food
            <br />
            Into <span>Community Value</span>
          </h1>

          <p>
            FoodLoop is a dual-sided platform that connects
            restaurant surplus food with community needs through
            localized tracking, smart redistribution and
            actionable waste reduction tools.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => scrollToSection("solution")}
            >
              Explore Solution →
            </button>

            <button
              className="secondary-btn"
              onClick={() => scrollToSection("technology")}
            >
              View Technology
            </button>

          </div>

        </div>


        <div className="hero-card">

          <div className="food-icon">
            🍲
          </div>

          <h3>FoodLoop Network</h3>

          <p>
            Restaurant → Platform → Community
          </p>

          <div className="network">

            <div>
              <strong>01</strong>
              <span>Surplus</span>
            </div>

            <div className="arrow">→</div>

            <div>
              <strong>02</strong>
              <span>Smart Match</span>
            </div>

            <div className="arrow">→</div>

            <div>
              <strong>03</strong>
              <span>Community</span>
            </div>

          </div>

        </div>

      </section>


      {/* PROBLEM */}

      <section id="problem" className="section">

        <div className="section-heading">

          <span>THE PROBLEM</span>

          <h2>
            Food Waste Is a Global Crisis
          </h2>

          <p>
            Large amounts of edible food are wasted while
            communities continue to face food insecurity.
          </p>

        </div>


        <div className="stats-grid">

          <div className="stat-card">

            <div className="stat-number">
              1/3
            </div>

            <h3>Food Wasted</h3>

            <p>
              A significant share of food produced globally
              is lost or wasted.
            </p>

          </div>


          <div className="stat-card">

            <div className="stat-number">
              💰
            </div>

            <h3>Economic Loss</h3>

            <p>
              Restaurants and food businesses lose value
              from unsold surplus.
            </p>

          </div>


          <div className="stat-card">

            <div className="stat-number">
              🌍
            </div>

            <h3>Environmental Impact</h3>

            <p>
              Food waste contributes to environmental
              damage and landfill pressure.
            </p>

          </div>


          <div className="stat-card">

            <div className="stat-number">
              🤝
            </div>

            <h3>Community Need</h3>

            <p>
              Edible surplus can be redirected toward
              people and organizations that need it.
            </p>

          </div>

        </div>

      </section>


      {/* SOLUTION */}

      <section id="solution" className="section solution-section">

        <div className="section-heading">

          <span>OUR SOLUTION</span>

          <h2>
            Track. Match. Act.
          </h2>

          <p>
            FoodLoop creates a localized network for
            efficient food redistribution.
          </p>

        </div>


        <div className="solution-grid">

          <div className="solution-card">

            <div className="step">
              01
            </div>

            <h3>Track</h3>

            <p>
              Restaurants can post available surplus food
              with useful details about quantity and location.
            </p>

          </div>


          <div className="solution-card">

            <div className="step">
              02
            </div>

            <h3>Match</h3>

            <p>
              The platform identifies suitable community
              partners based on available surplus and need.
            </p>

          </div>


          <div className="solution-card">

            <div className="step">
              03
            </div>

            <h3>Act</h3>

            <p>
              Community partners claim and collect food,
              helping keep edible surplus out of landfills.
            </p>

          </div>

        </div>

      </section>


      {/* WORKFLOW */}

      <section className="section">

        <div className="section-heading">

          <span>HOW IT WORKS</span>

          <h2>
            From Surplus to Impact
          </h2>

        </div>


        <div className="workflow">

          <div className="workflow-item">

            <div className="workflow-icon">
              🍽️
            </div>

            <h3>Restaurant</h3>

            <p>
              Posts surplus food
            </p>

          </div>


          <div className="workflow-line">
            →
          </div>


          <div className="workflow-item">

            <div className="workflow-icon">
              💻
            </div>

            <h3>FoodLoop</h3>

            <p>
              Validates and lists
            </p>

          </div>


          <div className="workflow-line">
            →
          </div>


          <div className="workflow-item">

            <div className="workflow-icon">
              🧠
            </div>

            <h3>Smart Match</h3>

            <p>
              Finds suitable partner
            </p>

          </div>


          <div className="workflow-line">
            →
          </div>


          <div className="workflow-item">

            <div className="workflow-icon">
              🤝
            </div>

            <h3>Community</h3>

            <p>
              Claims and collects
            </p>

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section id="features" className="section">

        <div className="section-heading">

          <span>KEY FEATURES</span>

          <h2>
            Built for Action
          </h2>

          <p>
            Practical tools designed for restaurants and
            community partners.
          </p>

        </div>


        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Localized Tracking</h3>
            <p>
              Track surplus food based on local availability
              and location.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3>Smart Redistribution</h3>
            <p>
              Connect surplus with suitable community needs.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Waste Analytics</h3>
            <p>
              Understand food waste patterns and identify
              reduction opportunities.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Actionable Alerts</h3>
            <p>
              Notify relevant users when surplus food
              becomes available.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Impact Dashboard</h3>
            <p>
              Monitor redistribution activity and
              measurable impact.
            </p>
          </div>


          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Scalable Network</h3>
            <p>
              Designed to expand from local communities
              to wider networks.
            </p>
          </div>

        </div>

      </section>


      {/* VALUE */}

      <section className="section value-section">

        <div className="section-heading">

          <span>VALUE</span>

          <h2>
            Benefits for Both Sides
          </h2>

        </div>


        <div className="value-grid">

          <div className="value-card restaurant">

            <div className="big-icon">
              🏪
            </div>

            <h3>For Restaurants</h3>

            <ul>
              <li>Reduce commercial food losses</li>
              <li>Manage surplus more effectively</li>
              <li>Improve waste visibility</li>
              <li>Track sustainability impact</li>
            </ul>

          </div>


          <div className="value-card community">

            <div className="big-icon">
              🏘️
            </div>

            <h3>For Communities</h3>

            <ul>
              <li>Access available surplus food</li>
              <li>Connect with local food sources</li>
              <li>Reduce grocery pressure</li>
              <li>Support local redistribution</li>
            </ul>

          </div>

        </div>

      </section>


      {/* TECHNOLOGY */}

      <section id="technology" className="section">

        <div className="section-heading">

          <span>TECHNOLOGY</span>

          <h2>
            Simple Full-Stack Architecture
          </h2>

          <p>
            FoodLoop can be implemented using a lightweight
            web stack and APIs.
          </p>

        </div>


        <div className="tech-grid">

          <div className="tech-card">

            <span className="tech-number">
              01
            </span>

            <h3>Frontend</h3>

            <p>
              HTML, CSS, JavaScript and React
            </p>

          </div>


          <div className="tech-card">

            <span className="tech-number">
              02
            </span>

            <h3>Backend</h3>

            <p>
              Node.js server and REST APIs
            </p>

          </div>


          <div className="tech-card">

            <span className="tech-number">
              03
            </span>

            <h3>Data Layer</h3>

            <p>
              Structured data for users, surplus and
              redistribution records.
            </p>

          </div>


          <div className="tech-card">

            <span className="tech-number">
              04
            </span>

            <h3>Smart Layer</h3>

            <p>
              Matching logic, alerts and analytics.
            </p>

          </div>

        </div>


        <div className="api-box">

          <div>

            <span className="api-label">
              BACKEND STATUS
            </span>

            <h3>
              {apiStatus}
            </h3>

          </div>

          <div className="api-dot"></div>

        </div>

      </section>


      {/* DIFFERENCE */}

      <section className="section difference-section">

        <div className="difference-content">

          <span>
            WHAT MAKES FOODLOOP DIFFERENT?
          </span>

          <h2>
            A Localized Link Between
            Surplus and Community Need
          </h2>

          <p>
            Instead of treating food waste only as a disposal
            problem, FoodLoop creates a practical connection
            between food businesses with surplus and
            communities that can use it.
          </p>

        </div>


        <div className="difference-points">

          <div>
            <strong>✓</strong>
            Localized tracking
          </div>

          <div>
            <strong>✓</strong>
            Smart redistribution
          </div>

          <div>
            <strong>✓</strong>
            Actionable waste reduction
          </div>

          <div>
            <strong>✓</strong>
            Measurable impact
          </div>

        </div>

      </section>


      {/* ROADMAP */}

      <section className="section">

        <div className="section-heading">

          <span>ROADMAP</span>

          <h2>
            From Prototype to Scalable Network
          </h2>

        </div>


        <div className="roadmap">

          <div className="roadmap-item">

            <div className="roadmap-number">
              01
            </div>

            <h3>
              Prototype
            </h3>

            <p>
              Build the core platform and user flows.
            </p>

          </div>


          <div className="roadmap-item">

            <div className="roadmap-number">
              02
            </div>

            <h3>
              Local Pilot
            </h3>

            <p>
              Connect restaurants and community partners
              within a local area.
            </p>

          </div>


          <div className="roadmap-item">

            <div className="roadmap-number">
              03
            </div>

            <h3>
              Smart Matching
            </h3>

            <p>
              Improve redistribution through matching
              and alert mechanisms.
            </p>

          </div>


          <div className="roadmap-item">

            <div className="roadmap-number">
              04
            </div>

            <h3>
              Scale
            </h3>

            <p>
              Expand the network across more locations.
            </p>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <div className="footer-logo">
          Food<span>Loop</span>
        </div>

        <p>
          Turning surplus food into community value.
        </p>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 FoodLoop Hackathon Project
        </p>

      </footer>

    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);