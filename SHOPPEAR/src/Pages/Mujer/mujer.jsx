import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../Components/Card/card";
import Banner from "../../Components/Banner/bannerMujer.jsx";

const mujer = ({}) => {
  const [productos, setProductos] = useState([]);

  const products = useSelector((state) => state.search.productosFiltrados).filter((item) => item.categoria == "mujeres");
  //console.log(products);
  return (
    <div>
      <Banner style={{marginTop:'4em'}}/>
      <div style={{display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '7px',
      justifyContent: 'center'}}>
        {products.length &&
          products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.nombre}
              price={product.precio}
              rate={product.rating}
              img={product.img}
            />
          ))}
      </div>
    </div>
  );
};

export default mujer;