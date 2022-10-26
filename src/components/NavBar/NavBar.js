import './NavBar.css'
import CategoryButton from './CategoryButton/CategoryButton'
import CartWidget from '../Home/CartWidget/CartWidget'

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className='title-container'>
        <h1>Tecnobsoleto</h1>
      </div>
      <div className="button-container">
        <a className="category-button" href="/">Home</a>
        <CategoryButton id="1" value="Celulares" />
        <CategoryButton id="2" value="Reproductores de MP3" />
        <CategoryButton id="3" value="Agendas Electronicas" />
      </div>
      <div className='cart-icon'>
        <CartWidget />
      </div>
    </div>
  )
}

export default NavBar