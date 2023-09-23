import React from "react";
import Header from "./Header/Header";
import Searchbar from "./Seachbar/Searchbar";
import Card from "./Card/Card";
import Footer from "./Footer/Footer";
import data from "../Mock Data/data";
import "@fontsource/metropolis";
import "@fontsource/metropolis/200.css";
import "@fontsource/metropolis/700.css";

function App() {

  return (
    <div>
      <Header />
      <Searchbar />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((cardTerm) => (
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
