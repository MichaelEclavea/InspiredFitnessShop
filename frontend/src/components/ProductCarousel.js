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
        <Carousel pause='hover' id='carousel'>
    {products.map(product => (
        <Carousel.Item key={product._id}>
            <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid style={styles.img}/>
                <Carousel.Caption className='carousel-caption'>
                    <h2>{product.name} (${product.price})</h2>
                </Carousel.Caption>
            </Link>
        </Carousel.Item>
    ))}
    {/* <Carousel.Item>
              <video autoPlay muted style={{width: '100%', height: '300px'}} controls>
                <source src='../inspired.mp4' type='video/mp4'></source>
            </video>
        </Carousel.Item> */}
        </Carousel>
    )
        // <div style={{ margin: 'auto', textAlign: 'center'}}>
              {/* <video autoPlay muted controls style={{width: '60vw', height: '400px', backgroundColor: 'black'}}>
                <source src='../inspired.mp4' type='video/mp4'></source>
            </video>
            </div> */}
}

const styles = {
    img: {
        height: '500px',
        width: 'auto',
    }
}

export default ProductCarousel


