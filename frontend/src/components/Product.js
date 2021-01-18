import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import Rating from './Rating'
import {  Card } from 'react-bootstrap'

const Product = ({ product }) => {

  return (
    <>
        <Card lg={12} md={6} sm={4} style={styles.card}>
            <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top' style={{ padding: '10px'}}/>
            </Link>

        <Card.Body>
        <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
        </Link>
        <Card.Text>
        <Rating value={product.rating} text={`${product.numReviews} Reviews`} />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
        </Card>
    </>
  )
}

const styles={
  card: {
    margin: '1vh 0',
  }
}

export default Product
