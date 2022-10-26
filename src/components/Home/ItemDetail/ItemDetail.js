import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../../../APIrest/productsApi";
import "./ItemDetail.css";
import ItemCount from "../../ItemCount/ItemCount";

const Item = () => {
  const { idProduct } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProductById(idProduct));
  }, []);
  const stock = product.stock;
  return (
        <div className="item-detail">
            <img className="img-prod" alt={product.name} src={product.image} />
            <h2>{product.name}</h2>
            <h2>${product.price}</h2>
            <h3>{product.detail}</h3>
            <p>Stock disponible:{stock}</p>
            <p>#{product.id}</p>
            <div>
                <ItemCount stock={stock} />
            </div>
            <button className="btn-comprar">Add to Cart</button>
        </div>
    )
};

export default Item;
