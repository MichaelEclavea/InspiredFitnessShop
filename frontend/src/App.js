import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import PaymentScreen from './screens/PaymentScreen'
import LoginScreen from './screens/LoginScreen'
import ProductScreen from './screens/ProductScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import { Container } from 'react-bootstrap'


function App() {
  return (
    <Router>
    <div>
    <Header/>
    <main className='py-3'>
    <Container>
    <Route path='/' component={HomeScreen} exact/>
    <Route path='/login' component={LoginScreen}/>
    <Route path='/payment' component={PaymentScreen}/>
    <Route path='/register' component={RegisterScreen}/>
    <Route path='/placeorder' component={PlaceOrderScreen}/>
    <Route path='/order/:id' component={OrderScreen}/>
    <Route path='/profile' component={ProfileScreen}/>
    <Route path='/product/:id' component={ProductScreen}/>
    <Route path='/shipping' component={ShippingScreen}/>
    <Route path='/cart/:id?' component={CartScreen}/>
    </Container>
    </main>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
