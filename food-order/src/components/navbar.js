import { Link } from "react-router-dom";
export function Header({itemInCart}) {

    const numberOfItem = itemInCart.length;
    return (
        <nav className="navbar navbar-dark" style={{backgroundColor: '#C5342F'}}>
        <div className="text-center w-100 text-light d-flex">
          <div className="w-100 d-flex justify-content-center align-items-center">
            <Link to="/">
            <i class="fas fa-hamburger heads "></i>  
              </Link>
              <h4 className="heads ms-2" >Food ordering portal</h4>
        </div>
          
            <div className="d-flex  me-4 align-items-center btn1 ">
            <Link to="/cart">
              <i className="fas fa-shopping-cart ms-auto me-2 heads"></i>
              </Link>
              {numberOfItem}
              
            </div>
          
        </div>
      </nav>
      
    );
  }