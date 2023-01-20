import React, { useContext } from "react";

const ProductCard = (props) => {
  const context = useContext();

  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );
  return (
    <>
      <div className="col-md-3 mb-3">
        <div className="card h-100 text-center p-4 " key={props.id}>
          <img
            src={props.image}
            className="card-img-top"
            alt={props.title}
            height="250px"
          />
          <div className="card-body">
            <h5 className="card-title mb-0">
              {props.title.substring(0, 20)}...
            </h5>
            <p className="card-text lead fw-bold">${props.price}</p>
            <button className="btn btn-outline-warning">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
