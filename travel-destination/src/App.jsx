import { FiFacebook, FiYoutube, FiInstagram } from "react-icons/fi";

const places = [
  {
    url: "https://images.unsplash.com/photo-1569530593440-e48dc137f7d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1616484173745-07f25fd0547f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",
  },
];

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
          <h1 className="font-display text-5xl">
            Discover the World, One Trip at a Time
          </h1>
          <p className="font-sans text-xl">
            From mountain retreats to tropical paradises, we'll help you plan
            the trip of a lifetime
          </p>

          <button className="btn">Explore</button>

          <div className="hero-links">
            <FiFacebook />
            <FiYoutube />
            <FiInstagram />
          </div>
        </div>

        <div className="hero-slider">
          <div className="hero-slider__group">
            <div className="hero-slider__group-item">
              <h2>Cappadocia</h2>
              <div>
                <span>[]</span> Turkey
              </div>
            </div>
            <div className="hero-slider__group-item">
              <h2>Santorini</h2>
              <div>
                <span>[]</span> Greece
              </div>
            </div>
            <div className="hero-slider__group-item">
              <h2>Bali</h2>
              <div>
                <span>[]</span> Indonesia
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
