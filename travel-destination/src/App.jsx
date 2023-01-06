function App() {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-left">
          <h4>Travel</h4>
        </div>
        <div className="header-center">
          <h6>Adventure Awaits</h6>
        </div>
        <div className="header-right">
          <ul>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1 className="display-1">Discover the World, One Trip at a Time</h1>
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
