import React from "react";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import data from "../data";

function App() {
  return (
    <div>
      <Header />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((cardTerm) => (
          <Card
            key={cardTerm.id}
            title={cardTerm.title}
            subtitle={cardTerm.subtitle}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
