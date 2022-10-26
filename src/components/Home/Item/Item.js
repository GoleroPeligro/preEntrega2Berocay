import ItemCount from "../../ItemCount/ItemCount";
import "./Item.css";
import {Link} from "react-router-dom";

const Item = ({ id, name, image, price, detail, category, stock }) => {
    return (
        <div className="item">
            <Link className="item-link" to={`product/${id}`}>
                <img className="img-prod" alt={name} src={image} />
                <div className="info-container">
                    <h2>{name}</h2>
                    <h3>${price}</h3>
                    <p>stock: {stock}</p>
                </div>
            </Link>
            <div>
                <ItemCount stock={stock} />
            </div>
        </div>

    )
}

export default Item;