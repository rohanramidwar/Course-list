import React, { useState } from "react";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Footer from "./Footer/Footer";
import { data, filtered } from "../Mock Data/data";
import Filter from "./Filter/Filter";
import Search from "./Search/Search";
import "@fontsource/metropolis";
import "@fontsource/metropolis/200.css";
import "@fontsource/metropolis/700.css";

function App() {
  const [products, setProducts] = useState(data);

  function filterData(cat) {
    setProducts(
      cat === "All"
        ? data
        : () => {
            return data.filter((product) => {
              return product.Category === cat || product.author === cat;
            });
          }
    );
  }

  return (
    <div>
      <Header />
      <div className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar">
            {filtered.map((filterItem) => (
              <Filter
                key={filterItem.id}
                pref1={filterItem.pref1}
                pref2={filterItem.pref2}
                pref3={filterItem.pref3}
                onFilter={filterData}
              />
            ))}
          </div>
          <Search />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((cardTerm) => (
          <Card
            key={cardTerm.id}
            img={cardTerm.img}
            title={cardTerm.title}
            subtitle={cardTerm.subtitle}
            author={cardTerm.author}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
