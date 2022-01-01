import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  // Destructuring object
  const { _id, img, name, price } = props.product;
  return (


    <div className="d-flex align-items-center shadow-sm mt-3 px-2">
      <div className="w-25">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div className="w-75 ms-3">
        <h6>{name}</h6>
        <p>Cost: {price} tk</p>
      </div>
      <div>

        <Link to={`/manageProducts/${_id}`}>
          <button className="btn btn-warning m-5 ">Product Details</button>
        </Link>

      </div>

    </div>
  );
};

export default Cart;