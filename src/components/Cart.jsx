import { useDispatch, useSelector } from "react-redux";
import { clearProduct, decrementQuantity, removeProduct, incrementQuantity } from "../utils/cartSlice";
import t1 from "../assets/trash.png"

const Cart = () => {

    const item = useSelector((state) => state.cart?.products)
    const dispatch = useDispatch();

    const totalPrice = item.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

    const handleClearCart = () => {
        dispatch(clearProduct());
    }

    const handleRemove = (proID) => {
        dispatch(removeProduct(proID))
    }

    const handleDecrement = (product) => {
        dispatch(decrementQuantity(product))
    }

    const handleIncrement = (product) => {
        dispatch(incrementQuantity(product))
    }

    return (
        <div className="container mt-4">
          <h3>Cart</h3>
          {item.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="row">
              {item.map((prod) => (
                <div key={prod.id} className="col-12 mb-3 mt-4">
                  <div className="card">
                    <div className="row g-0">
                      {/* Image Section */}
                      <div className="col-md-2 d-flex justify-content-between align-items-center">
                        {/* Image */}
                        <img className="img-fluid w-75 ms-4 mt-2" src={prod.image}/>
                      </div>
            
                      <div className="col-md-10 d-flex align-items-center justify-content-between">
                        <p className="p-3 mb-0 w-25">{prod.title}</p>
                        <p className="fw-bold fs-4 ">₹{Math.floor(prod.price)}</p>

                        <div className="d-flex align-items-center me-4">   
                          <button
                            className="btn btn-secondary me-2"
                            onClick={() => handleDecrement(prod.id)}
                            disabled={prod.quantity <= 1} // Disable decrement if quantity is 1
                          > -
                          </button>
                          <span className="mx-2">{prod.quantity}</span>
                        <button
                          className="btn btn-secondary ms-2 me-5"
                          onClick={() => handleIncrement(prod.id)}
                        >
                          +
                        </button>

                          {/* <span className="mx-3">{prod.quantity}</span> */}
                          <button
                            className="btn btn-danger"
                            onClick={() => handleRemove(prod.id)} >
                            <img src={t1} alt="Trash"  />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              ))}
                    <div className="col-12 d-flex justify-content-between">
                            <button className="btn btn-dark border border-dark rounded my-4 p-2" onClick={()=> handleClearCart()}>
                            Clear Cart
                            </button>
                        
                        {item.length > 0 && (
                            <div className="border border-dark p-2 my-4 rounded">Total Price : ₹ {totalPrice.toFixed(2)}</div>
                        )}
                </div>
            </div>
          )}
        </div>
      );
    }     
         
export default Cart;

