import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { loading, error, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

    return loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
        <Carousel pause='hover' id='carousel' style={{paddingTop: '5vh'}}>
    {products.map(product => (
        <Carousel.Item key={product._id}>
            <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid style={styles.img}/>
                <Carousel.Caption className='carousel-caption'>
                </Carousel.Caption>
            </Link>
        </Carousel.Item>
    ))}
        </Carousel>
    )
}

const styles = {
    img: {
        height: '300px',
        width: 'auto',
        borderRadius: '50%',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.276), 0 6px 12px rgba(0, 0, 0, 0.276)',
    }
}

export default ProductCarousel


