import React from 'react';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea, Grid } from '@mui/material';
// import { Box } from '@mui/system';
import Rating from 'react-rating';






const Review = (props) => {
  const { name, description, img, profession, star } = props.review;

  console.log(props.review);
  return (
    <div className="col-md-4 ">
      <div className="card shadow rounded mb-4 " >
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title fw-bolder">{name}</h5>
          <br />
          <h4 className="text-primary">{price}</h4>

          <h4 style={{ color: "#01579b" }}>
              <Rating
                initialRating={star}
                emptySymbol="far fa-star  "
                fullSymbol="fas fa-star "></Rating>

            </h4>

          
          
          {/* <table className="mt-4 fw-bold">
            <thead></thead>
            <tbody>
              
            <tr>
                <td>Cost</td>
                <td className="px-2 ">:</td>
                <td className="text-success">{price}</td>
              </tr>

              

             

            </tbody>
            <tfoot></tfoot>
          </table> */}
         

          <button className="btn btn-primary mt-4" onClick={() => props.handleAddToList(props.product)}><i className="fas fa-user-plus"></i> Add to cart</button>

        </div>
      </div>
    </div>

  );
};

export default Review;