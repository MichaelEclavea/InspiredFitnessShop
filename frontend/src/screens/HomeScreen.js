import React from 'react'
import {Link as DomLink} from 'react-router-dom'
import FadeIn from 'react-fade-in'
import {Link} from 'react-scroll'
import Classes from '../components/Classes'
import '../styles/homescreen.css'


const HomeScreen = () => {

  return (
    <>
      <div id="welcome">
        <FadeIn transitionDuration="2000" delay="1000">
          <h1 className="main-title">Inspired Fitness & Training Center </h1>
          <section className="btn-section">
            <Link to="classes" smooth duration={1000}>
              <button className="home-btn" >Classes</button>
            </Link>
            <DomLink to="/shop">
              <button className="home-btn">Shop</button>
            </DomLink>
          </section>
        </FadeIn>
        <section className="down-section">
          <FadeIn transitionDuration="2000" delay="2000">
            <Link to="classes" smooth duration={1000}>
              <i
                className="fa fa-angle-down fa-2x"
                aria-hidden="true"
                id="down-icon"
              ></i>
            </Link>
          </FadeIn>
        </section>
      </div>
      <Classes />
    </>
  )
}

export default HomeScreen
