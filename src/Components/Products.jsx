import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useDispatch } from 'react-redux';
import { addcart } from '../store/Cartslice';

function Products() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      setData(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(data);

  const addToCart = (item) => {
    console.log(item);
    dispatch(addcart(item));
  };

  return (
    <div className='container'>
      <h2>Products</h2>
      <div className='row'>
        {data.map((item) => (
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
                  onClick={() => addToCart(item)}
                  className='btn btn-primary'
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
