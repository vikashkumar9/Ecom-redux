import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removecart } from '../store/Cartslice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);

  const handleRemove = (id) => {
    dispatch(removecart(id));
  };

  return (
    <div className='container'>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <h3>No items in cart</h3>
      ) : (
        <div className='row'>
          {cart.map((item) => (
            <div key={item.id} className='col-md-4 mb-4'>
              <div
                className='card'
                style={{ width: '100%', boxSizing: 'border-box' }}
              >
                <img
                  src={item.image}
                  className='card-img-top'
                  alt={item.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{item.title}</h5>
                  <p className='card-text'>${item.price}</p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className='btn btn-primary'
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
