import {useState} from 'react';
import './ItemCount.css'

const ItemCount = ({ stock }) => {
    const [numCount, setNumCount] = useState(1);
  
    const handleSus = () => {
            setNumCount(numCount - 1);
        }
    const handleAdd = () =>{
        setNumCount(numCount + 1);
    }
        

    return (
        <div className='count-container'>
            <button className="sus-button" disabled = {numCount === 1?true:false} onClick={handleSus}>-</button>
            <p className="count">{numCount}</p>
            <button className="add-button" disabled = {numCount === stock?true:false}onClick={handleAdd}>+</button>
        </div>
    )
}

export default ItemCount