function App() {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-left">
          <h4 className="text-2xl font-extrabold">travel.</h4>
        </div>
        <div className="header-center">
          <h6 className="text-[12px] uppercase tracking-wider">
            Adventure Awaits
          </h6>
        </div>
        <div className="header-right">
          <ul className="header-links">
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1 className="display-1 font-display">
            Discover the World, One Trip at a Time
          </h1>
          <p className="subtitle">
            From mountain retreats to tropical paradises, we'll help you plan
            the trip of a lifetime
          </p>

          <button className="btn">Explore</button>
        </div>
        <div className="hero-slider"></div>
      </section>
    </div>
  );
}

export default App;
