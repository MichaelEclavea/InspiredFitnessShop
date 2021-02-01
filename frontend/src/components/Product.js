import React from 'react'
import Rating from './Rating'
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Product = ({ product }) => {

  return (
    <>
        <Card lg={12} md={6} sm={4} style={styles.card}>
        <LinkContainer to={`/product/${product._id}`} style={{ cursor: 'pointer', padding: '20px'}}>
            <Card.Img src={product.image} variant='top' />
        </LinkContainer>

        <Card.Body>
        <LinkContainer to={`/product/${product._id}`} style={{ cursor: 'pointer'}} id='product-name-link'>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
        </LinkContainer>

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
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  }
}

export default Product
