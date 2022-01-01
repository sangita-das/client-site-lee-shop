
import React, { useEffect, useState } from 'react';
import Carts from '../Carts/Carts';
import Product from '../Product/Product';

const Products = () => {

  const [products, setProducts] = useState([]);

  //Selected resort list
  const [carts, setCarts] = useState([]);

  // fetching data
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setProducts(data))
      
  }, []);

  
  const handleAddToList = product => {
    
    const check = carts.find(e => e.key === product.key);
    if (!check) {
      // Adding new product to the list
      const newCartAddedList = [...carts, product];
      setCarts(newCartAddedList);
    }
  }



  return (
    <div>
      <h2>Available Products</h2>




      <div className="row mt-5 ms-5">
      <div className="col-md-3 ">
        {/* displaying selected products */}
        <Carts carts={carts}></Carts>
      </div>
      <div className="col-md-9">
        <div className="row">
          {
            // Displaying card products
            products.map(product => <Product key={product._id} handleAddToList={handleAddToList} product={product}></Product>)
          }
        </div>
      </div>
     
     
    </div>
    

    
    
    </div>
  );
};

export default Products;