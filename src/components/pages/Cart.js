import React, { useContext } from "react";
import { BooksContext } from "../../App";

const Cart = () => {
  const context = useContext(BooksContext);

  const totalCartAmount = context.state.cart
    .reduce((total, book) => (total = total + book.price * book.count), 0)
    .toFixed(2);

  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );
  return (
    <>
      <div className="container main-body-width">
        <div className="row pt-3 d-flex justify-content-between">
          <div className="row post-main">
            <table class="table table-striped">
              <thead className="bg-warning">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Book Name</th>
                  <th scope="col">Author</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Sub Total</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {context.state.cart.map((book) => (
                  <tr key={book.id}>
                    <td>1</td>
                    <td>
                      {" "}
                      <img
                        src={book.image}
                        alt={book.name}
                        style={{ width: "80px" }}
                      />
                    </td>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.price}</td>
                    <td>
                      {" "}
                      <button onClick={() => context.decrease(book.id)}>
                        -
                      </button>
                      {book.count}
                      <button onClick={() => context.increase(book.id)}>
                        +
                      </button>
                    </td>
                    <td>{(book.price * book.count).toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => context.removeFromCart(book.id)}
                        className="text-danger btn border-0"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    {" "}
                    <h6 className="fw-bold ">Total Cart Amount:</h6>
                  </td>
                  <td>
                    <h6 className="fw-bold ">{totalCartAmount} $</h6>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
