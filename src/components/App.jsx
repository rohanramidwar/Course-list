import React, {useState} from "react";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Footer from "./Footer/Footer";
import data from "../Mock Data/data";
import Filter from "./Filter/Filter";
import Search from "./Search/Search";

function App() {

  const [products, setProducts] = useState(data);
  function filterData(cat) {
    // if(cat === "All") {
    //   setProducts(data);
    // }
    // else { 
      setProducts(cat === "All" ? data : () => {
        return data.filter(product => {
          return product.Category === cat;
        });
      });
  // }
  }


  return (
    <div>
      <Header />
      <div className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Filter onFilter={filterData} />
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
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
