import Cards from './Cards'
import coffeeImg from './assets/coffee.jpg'
import teaImg from './assets/Tea.jpg'
import chocolateImg from './assets/chocolate.jpg'
import redWineImg from './assets/red-wine.jpg'
import whiteWineImg from './assets/white-wine.jpg'
import roseWineImg from './assets/rose-wine.jpg'
import champagneImg from './assets/champagne.jpg'
import cocktailImg from './assets/cocktail.jpg'
import mohitoImg from './assets/mohito.jpg'
import whiskeyImg from './assets/whiskey.jpg'
import vodkaImg from './assets/vodka.jpg'
import beerImg from './assets/Beer.png'
import sodaDrinkImg from './assets/soda-drink.jpg'
import fruitJuiceImg from './assets/fruit-juice.jpg'
import milkshakeImg from './assets/milkshake.jpg'
import { useState } from 'react'

function App() {
  const [isOver18, setIsOver18] = useState(false);

  return (
    <>
      <h1 className="header">Menu</h1>
      <div className='age-check'>
        <p>Are you over 18?</p>
        <input type="radio" id='yes' name="over18" value="Yes" onChange={() => setIsOver18(true)} />
        <label htmlFor="yes">Yes</label><br />
        <input type="radio" id='no' name="over18" value="No" onChange={() => setIsOver18(false)} />
        <label htmlFor="no">No</label><br />
      </div>
      {isOver18 ? (
        <>
          <Cards item="Tea" image={teaImg} price="3.00 €" />
          <Cards item="Hot Chocolate" image={chocolateImg} price="4.00 €" />
          <Cards item="Soda Drink" image={sodaDrinkImg} price="2.50 €" />
          <Cards item="Fruit Juice" image={fruitJuiceImg} price="3.00 €" />
          <Cards item="Milk Shake" image={milkshakeImg} price="5.00 €" />
          <Cards item="Coffee" image={coffeeImg} price="4.50 €" />
          <Cards item="Red Wine" image={redWineImg} price="6.00 €" />
          <Cards item="White Wine" image={whiteWineImg} price="6.00 €" />
          <Cards item="Rose Wine" image={roseWineImg} price="6.00 €" />
          <Cards item="Champagne" image={champagneImg} price="7.00 €" />
          <Cards item="Cocktail" image={cocktailImg} price="8.00 €" />
          <Cards item="Mohito" image={mohitoImg} price="8.00 €" />
          <Cards item="Whiskey" image={whiskeyImg} price="8.00 €" />
          <Cards item="Vodka" image={vodkaImg} price="8.00 €" />
          <Cards item="Beer" image={beerImg} price="8.00 €" />
        </>) : (
        <>
          <Cards item="Tea" image={teaImg} price="3.00 €" />
          <Cards item="Hot Chocolate" image={chocolateImg} price="4.00 €" />
          <Cards item="Soda Drink" image={sodaDrinkImg} price="2.50 €" />
          <Cards item="Fruit Juice" image={fruitJuiceImg} price="3.00 €" />
          <Cards item="Milk Shake" image={milkshakeImg} price="5.00 €" />
        </>)
      }





    </>
  )
}

export default App
