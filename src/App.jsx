import Menu from "./Menu";
import Categories from "./Categories";
import menu from "./data";
import { useState } from "react";
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItem, setMenuItem] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuItem(menu);
      return;
    }
    const newItem = menu.filter((item) => item.category === category);
    setMenuItem(newItem);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItem={filterItem} />
        <Menu key={menuItem.id} items={menuItem} />
      </section>
    </main>
  );
}

export default App;
