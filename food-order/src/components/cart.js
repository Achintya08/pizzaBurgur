import axios from 'axios';
import { Link } from 'react-router-dom';

export function CartItems({itemInCart, fetchItemsinCart}) {
  
  async function removeFromCArt(productItem){
    const deleteData = await axios.delete(`http://localhost:8080/cart/deleteFromCart`,{
      data:{
        _id: productItem._id
      }
    });
    fetchItemsinCart();
  }
  function renderCart(){
    return itemInCart.map(function (productItem){
        return(
            <div className="container">
            <div className="row border-top border-bottom mt-4">
              <div className="col-md-8">
               
                  <h4>{productItem.productName}</h4>
                
                <p className="price ">
                {productItem.price} <br></br>{productItem.description}
                </p>
    
                <button className="btn btn-danger"
                onClick={()=>removeFromCArt(productItem)}
                >Remove</button>
              </div>
    
              <div className="col-md-4 imagess d-flex justify-content-center align-items-center ">
                <img
                  src={productItem.imageURL}
                  alt="BigCo Inc. logo"
                />
              </div>
            </div>
            
          </div>
        );
    });
}
function clearCart(){
  itemInCart.map(function (productItem){
    removeFromCArt(productItem);
  });
  fetchItemsinCart();
  }
return (
<div>
   
 {renderCart()}
 <Link to="/">
 <button className="btn btn-danger mt-5 ms-5" onClick={()=>clearCart()} >Place order</button>
</Link>
</div>
);
}
