
import productsApi from '../../../APIrest/productsApi';
import Item from '../../Home/Item/Item';
import { useState, useEffect } from 'react';
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";


const ItemListContainer = (prop) => {
  const saludoStyle = {
    backgroundColor: "#008080",
    padding: "10px",

  }
  const [products, setProducts] = useState([]);
  const { cat } = useParams();

  const getProducts = () => {
    setTimeout(() => {
      const products = productsApi;
      setProducts(products);
    }, 2000);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={saludoStyle}>
      <div >
        <h3>Bienvenido {prop.name}</h3>
      </div>
      <div className="item-container">
        {cat?
        products.filter((prod) => prod.category === cat).map((product,i) => (
          <Item
            id={i}
            key={i}
            name={product.name}
            image={product.image}
            price={product.price}
            detail={product.detail}
            category={product.category}
            stock={product.stock}
          />
        )):
        products.map((product,i) => (
          <Item
            id={i}
            key={i}
            name={product.name}
            image={product.image}
            price={product.price}
            detail={product.detail}
            category={product.category}
            stock={product.stock}
          />
        ))
        }

      </div>

    </div>
  )
}

export default ItemListContainer;