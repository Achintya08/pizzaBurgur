import { Link } from "react-router-dom";
export function HomePage() {
  return (
    <div className="d-flex justify-content-center main-item">
      <div className="home-item d-flex flex-column  ">
        <div className="image-div mt-1 ms-4">
          <Link to="/pizza">
            <img
              src={
                "https://res.cloudinary.com/di6tyibvf/image/upload/c_scale,h_140/v1621805643/pizza-23477_640_hcayt6.png"
              }
              alt="BigCo Inc. logo"
            />
          </Link>
        </div>
        <div className="Item-name mt-3">
          <b>Pizza</b>
        </div>
      </div>

      <div className="home-item d-flex  flex-column  ">
        <div className="image-div mt-1 ms-4">
          <Link to="/burgur">
            <img
              src={
                "https://res.cloudinary.com/di6tyibvf/image/upload/c_scale,h_140,w_140/v1621805766/cheeseburger-34315_640_dir8gp.png"
              }
              alt="BigCo Inc. logo"
            />
          </Link>
        </div>
        <div className="Item-name  mt-3">
          <b>Burger</b>
        </div>
      </div>
    </div>
  );
}
