
import Banner from '../Banner/Banner';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Product from '../Details/Product/Product';



const Home = () => {

  const [products, setProducts] = useState([]);

  //Selected resort list
  const [carts, setCarts] = useState([]);

  // fetching data
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setProducts(data.slice(0, 6)))
      
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
      <h2>This is home page</h2>
      <Banner></Banner>
      
{/* ==========product ============= */}
<div>
      <h2>Available Products</h2>

     
      <div className="row container ms-5 ps-5">
        {
            // Displaying resort services
            products.map(product => <Product key={product._id} handleAddToList={handleAddToList} product={product}></Product>)
          }
        </div>
      
      
    </div>


      <Footer></Footer>
    </div>
  );
};

export default Home;