import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import test4 from "./test4.jpg";
import test5 from "./test5.jpg";
// import test4 from "./test4.jpg";
import "./product.css";

const Product = (props) => {
  console.log(props)
  return (
    <Card className="cardss card-deck" >
      <Card.Img variant="top" className="card-image"src={props.data.imageUrl} />
      <Card.Body>
        <Card.Title>{props.data.prodName}</Card.Title>
       <Card.Subtitle className="mb-4 text-muted">
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content.{props.data.price} */}
        </Card.Subtitle> 
       <Button variant="primary">Rs.{props.data.price}/-</Button>
     </Card.Body>
    </Card> 
  )
}

export default Product