import Cards from './Cards'
import coffeeImg from './assets/coffee.jpg'
import teaImg from './assets/Tea.jpg'
import chocolateImg from './assets/chocolate.jpg'
import redWineImg from './assets/red-wine.jpg'
import whiteWineImg from './assets/white-wine.jpg'
import roseWineImg from './assets/rose-wine.jpg'
import champagneImg from './assets/champagne.png'
import cocktailImg from './assets/cocktail.jpg'
import mohitoImg from './assets/mohito.jpg'
import whiskeyImg from './assets/whiskey.jpg'
import vodkaImg from './assets/vodka.jpg'
import beerImg from './assets/Beer.png'
import sodaDrinkImg from './assets/soda-drink.png'
import fruitJuiceImg from './assets/fruit-juice.jpg'
import milkshakeImg from './assets/milkshake.jpg'
import { useState } from 'react'
import './App.css'
import Alert from '@mui/material/Alert';


function App() {
  const [isOver18, setIsOver18] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [cart, setCart] = useState([]);
  const [payment, setPayment] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cartIsEmpty, setIsCartEmpty] = useState(true);

  const drinks = [
    { id: 1, name: "Tea", image: teaImg, price: "3.00 €" },
    { id: 2, name: "Hot Chocolate", image: chocolateImg, price: "4.00 €" },
    { id: 3, name: "Soda Drink", image: sodaDrinkImg, price: "2.50 €" },
    { id: 4, name: "Fruit Juice", image: fruitJuiceImg, price: "3.00 €" },
    { id: 5, name: "Milk Shake", image: milkshakeImg, price: "5.00 €" },
    { id: 6, name: "Coffee", image: coffeeImg, price: "4.50 €" },
    { id: 7, name: "Red Wine", image: redWineImg, price: "6.00 €" },
    { id: 8, name: "White Wine", image: whiteWineImg, price: "6.00 €" },
    { id: 9, name: "Rose Wine", image: roseWineImg, price: "6.00 €" },
    { id: 10, name: "Champagne", image: champagneImg, price: "7.00 €" },
    { id: 11, name: "Cocktail", image: cocktailImg, price: "8.00 €" },
    { id: 12, name: "Mohito", image: mohitoImg, price: "8.00 €" },
    { id: 13, name: "Whiskey", image: whiskeyImg, price: "8.00 €" },
    { id: 14, name: "Vodka", image: vodkaImg, price: "8.00 €" },
    { id: 15, name: "Beer", image: beerImg, price: "8.00 €" }
  ]

  const under18 = drinks.filter(d => d.id <= 5);
  const over18 = drinks;

  const handleAddToCart = (item, quantity) => {
    setCart(prev => [...prev, { ...item, quantity }]);
    setIsCartEmpty(false);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id); 
    setCart(updatedCart);   
    setIsCartEmpty(updatedCart.length === 0);   
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value)
  }

  const total = cart.reduce((sum, item) =>
    sum + item.quantity * parseFloat(item.price), 0);

  const proceedWithOrder = () => {
    setOrderPlaced(true);
    setCart([]);
    setPayment("");
    setShowCartModal(false);
    setIsCartEmpty(true);
  };

  function CartModal() {
    return (
      <div className="modal-overlay">
        <div className="cart_modal">
          <h2>Your cart:</h2><hr />

          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <p>{item.quantity} × {item.name} = </p>
              <p>{item.quantity * parseFloat(item.price)} €</p>
              <button className='remove-btn' onClick={() => handleRemoveFromCart(item.id) }>Remove</button>
            </div>
          ))}

          <h3>Total: {total} €</h3>
          {cartIsEmpty ? <p>Your cart is empty.</p> : <select value={payment} onChange={handlePaymentChange}>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="Cash">Cash</option>
          </select>}

          <button className="success-btn" onClick={proceedWithOrder}>Proceed</button>
          <button className="cancel-btn" onClick={() => setShowCartModal(false)}>Cancel</button>
        </div>
      </div>);
  };

  return (
    <>
      <div className='header'>
        <div className='header-right'>
          <button className='cart-btn' onClick={() => setShowCartModal(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart">
              <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </button>
        </div>
        <h1 className="header-center">Menu</h1>
      </div>
      <div className='age-check'>
        <p>Are you over 18?</p>
        <input type="radio" id='yes' name="over18" value="Yes" onChange={() => setIsOver18(true)} />
        <label htmlFor="yes">Yes</label><br />
        <input type="radio" id='no' name="over18" value="No" onChange={() => setIsOver18(false)} />
        <label htmlFor="no">No</label><br />
      </div>
      {(isOver18 ? over18 : under18).map(drink =>
        <Cards key={drink.id} item={drink} onAddToCart={handleAddToCart} />
      )}
      {showCartModal && <CartModal />}
      {orderPlaced && (
        <Alert className='alert-class' severity="success" onClose={() => setOrderPlaced(false)}>
          Your order has been placed successfully!
        </Alert>
      )}
    </>
  )
}

export default App
