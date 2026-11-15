
import { useState } from "react";

const menuItems = [
  {
    name: "Butter Croissant",
    category: "Pastries",
    description: "Flaky, buttery and freshly baked.",
    price: "Rs. 280",
  },
  {
    name: "Chocolate Tart",
    category: "Pastries",
    description: "Rich chocolate in a delicate pastry shell.",
    price: "Rs. 350",
  },
  {
    name: "Classic Cappuccino",
    category: "Coffee",
    description: "Espresso with silky steamed milk.",
    price: "Rs. 250",
  },
  {
    name: "Caramel Latte",
    category: "Coffee",
    description: "Smooth espresso with a hint of caramel.",
    price: "Rs. 320",
  },
  {
    name: "Eggs Benedict",
    category: "Brunch",
    description: "Poached eggs with creamy hollandaise.",
    price: "Rs. 550",
  },
  {
    name: "French Toast",
    category: "Brunch",
    description: "Golden toast with fresh seasonal fruit.",
    price: "Rs. 450",
  },
];

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Coffee", "Pastries", "Brunch"];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <main className="menu-page">
      <section className="menu-heading">
        <p className="hero-label">MADE WITH LOVE</p>
        <h1>Our Menu</h1>
        <p>Thoughtfully prepared, beautifully served.</p>
      </section>

      <section className="menu-content">
        <div className="menu-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <article className="menu-card" key={item.name}>
              <p className="menu-category">{item.category}</p>
              <h2>{item.name}</h2>
              <p className="menu-description">
                {item.description}
              </p>
              <p className="menu-price">{item.price}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Menu;
