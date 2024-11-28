import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './cart.css'; // The updated CSS file

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: 'Cotton T-shirt', imgSrc: 'https://i.imgur.com/1GrakTl.jpg', price: 44, quantity: 1 },
    { id: 2, name: 'Cotton T-shirt', imgSrc: 'https://i.imgur.com/ba3tvGm.jpg', price: 44, quantity: 1 },
    { id: 3, name: 'Cotton T-shirt', imgSrc: 'https://i.imgur.com/pHQ3xT3.jpg', price: 44, quantity: 1 }
  ]);
  const [shipping, setShipping] = useState(5);
  const [code, setCode] = useState('');

  const incrementQuantity = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
  };

  const decrementQuantity = (id) => {
    const updatedItems = items.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0) + shipping;
 
  return (
    <div className="cart-body">
      <div className="cart-card">
        <div className="row">
          <div className="col-md-8 cart-cart">
            <div className="cart-title">
              <div className="row">
                <div className="col"><h4><b>Shopping Cart</b></h4></div>
                <div className="col align-self-center text-right text-muted">{items.length} items</div>
              </div>
            </div>
            {items.map(item => (
              <div className="row border-top border-bottom" key={item.id}>
                <div className="row cart-main align-items-center">
                  <div className="col-2"><img className="img-fluid cart-img" src={item.imgSrc} alt={item.name} /></div>
                  <div className="col">
                    <div className="row text-muted">Shirt</div>
                    <div className="row">{item.name}</div>
                  </div>
                  <div className="col">
                    <button className="cart-button" onClick={() => decrementQuantity(item.id)}><FontAwesomeIcon icon={faMinus} /></button>
                    <input
                      type="number"
                      className="border"
                      value={item.quantity}
                      onChange={(e) => setItems(items.map(i => i.id === item.id ? { ...i, quantity: parseInt(e.target.value) || 1 } : i))}
                      min="1"
                    />
                    <button className="cart-button" onClick={() => incrementQuantity(item.id)}><FontAwesomeIcon icon={faPlus} /></button>
                  </div>
                  <div className="col">
                    &euro; {item.price}
                    <span className="cart-delete" onClick={() => removeItem(item.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <div className="cart-back-to-shop">
              <a href="#" className="cart-a"><FontAwesomeIcon icon={faArrowLeft} /> <span className="text-muted">Back to shop</span></a>
            </div>
          </div>
          <div className="col-md-4 cart-summary">
            <div><h5 className="cart-h5"><b>Summary</b></h5></div>
            <hr className="cart-hr" />
            <div className="row">
              <div className="col cart-col-2" style={{ paddingLeft: 0 }}>ITEMS {items.length}</div>
              <div className="col text-right">&euro; {totalPrice.toFixed(2)}</div>
            </div>
            <form className="cart-form">
              <p>SHIPPING</p>
              <select className="cart-select" value={shipping} onChange={(e) => setShipping(parseInt(e.target.value))}>
                <option className="text-muted" value={5}>Standard-Delivery- &euro;5.00</option>
              </select>
              <p>GIVE CODE</p>
              <input
                id="cart-code"
                className="cart-input"
                placeholder="Enter your code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </form>
            <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
              <div className="col cart-col-2">TOTAL PRICE</div>
              <div className="col text-right">&euro; {totalPrice.toFixed(2)}</div>
            </div>
            <button className="cart-btn" onSubmit={checkout()}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
