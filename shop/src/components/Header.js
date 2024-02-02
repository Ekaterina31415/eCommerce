import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Order from './Order';

const showOrders = (props) => {
  const { orders } = props;
  let summa = 0;
  orders.forEach(order => summa += Number.parseFloat(order.price));

  return (<div>
    {orders.map((order) => (
      <Order key={order.id} item={order} onDelete={props.onDelete}/>
    ))}
    <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
  </div>)
}
const showNothing = () => {
  return (<div className='empty'>
    <h2>Ваша корзина пуста</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>About us</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <FaCartShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}
