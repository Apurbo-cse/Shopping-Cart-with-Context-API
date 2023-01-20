import React, { useContext } from "react";
import { BooksContext } from "../../App";
import { productApi } from "../api/productApi";
const ProductCard = (props) => {
  const context = useContext(BooksContext);

 

  return (
    <>
      {productApi.map((book) => (
        <div className="col-md-3 mb-3" key={book.id}>
          <div className="card h-100 text-center p-4 " key={book.id}>
            <img
              src={book.image}
              className="card-img-top"
              alt={book.title}
              height="250px"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">{book.Author}</h5>
              <p className="card-text lead fw-bold">${book.price}</p>
              <button
                onClick={() => context.addToCart(book)}
                className="btn btn-outline-warning"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
