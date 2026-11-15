
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">A LITTLE MOMENT OF JOY</p>

          <h1>
            Good food.
            <br />
            Beautiful moments.
          </h1>

          <p className="hero-description">
            From freshly brewed coffee to delicate pastries,
            discover your new favourite little corner.
          </p>

          <Link to="/menu" className="hero-button">
            Explore Our Menu
          </Link>
        </div>
      </section>

      <section className="featured">
        <div className="section-heading">
          <p className="hero-label">A TASTE OF MAISON</p>
          <h2>Made with love, served with warmth.</h2>
          <p>
            A few of our favourites, thoughtfully prepared
            to make your day a little sweeter.
          </p>
        </div>

        <div className="featured-grid">
          <div className="featured-card">
            <div className="featured-image">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
                alt="Freshly baked artisan bread and pastries"
              />
            </div>
            <h3>Freshly Baked Pastries</h3>
            <p>Buttery, delicate and baked fresh every day.</p>
          </div>

          <div className="featured-card">
            <div className="featured-image">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800"
                alt="Freshly prepared cup of coffee"
              />
            </div>
            <h3>Artisan Coffee</h3>
            <p>Beautifully brewed coffee for every kind of day.</p>
          </div>

          <div className="featured-card">
            <div className="featured-image">
              <img
                src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800"
                alt="Beautifully presented brunch"
              />
            </div>
            <h3>European Brunch</h3>
            <p>Delicious plates made for slow, lovely mornings.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
