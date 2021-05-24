export function PizzaItems({allItems, addToCart}) {

    const pizzaData = allItems[0].subItemsData.subItems;
    function renderPizza(){
        return pizzaData.map(function (productItem){
            return(
                <div className="container">
                <div className="row border-top border-bottom mt-4">
                  <div className="col-md-8">
                   
                      <h4>{productItem.name}</h4>
                    
                    <p className="price ">
                    {productItem.price} <br></br>{productItem.description}
                    </p>
        
                    <button className="btn btn-danger"
                    onClick={()=>addToCart(productItem)}
                    >Order Now</button>
                  </div>
        
                  <div className="col-md-4 imagess d-flex justify-content-center align-items-center ">
                    <img
                      src={productItem.image}
                      alt="BigCo Inc. logo"
                    />
                  </div>
                </div>
              </div>
            );
        });
    }
  return (
    <div>
     {renderPizza()}
    </div>
  );
}
