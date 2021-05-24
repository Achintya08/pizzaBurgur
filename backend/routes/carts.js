var express = require('express');
var router = express.Router();

const {cartItems} = require("../models/cart");

router.get('/cartProducts',async function(req, res, next) {
    const cartItem = await cartItems.find();
    res.send(cartItem);
  });

  router.post(`/addToCart`,async (req,res )=>{
    let cartItem = new cartItems({
        productName: req.body.productName,
        description: req.body.description,
        imageURL: req.body.imageURL,
        price: req.body.price
  })
 
  cartItem = await cartItem.save();
 
  
  if(!cartItem) 
  return res.status(500).send('The product cannot be created')
 
  res.send({result: "success"});
 
  
  })

  router.delete('/deleteFromCart',  (req, res)=>{
    cartItems.findOneAndRemove({_id:req.body._id}, function(err){
       if(err){
           console.log(err);
       }
       else{
           res.send({result:"success"});
       }
   });  
})

 

  module.exports = router;