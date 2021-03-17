import React, {useState} from 'react'
import {Link as DomLink} from 'react-router-dom'
import FadeIn from 'react-fade-in'
import {Link} from 'react-scroll'
import Classes from '../components/Classes'
import '../styles/homescreen.css'

const HomeScreen = () => {
  // const [isDesktop, setIsDesktop] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth > 769) {
  //     setIsDesktop(true);
  //     setIsMobile(false);
  //   } else {
  //     setIsMobile(true);
  //     setIsDesktop(false);
  //   }
  // }, []);

  return (
    <>
      <div id="welcome">
        <img className="background-image" src="../images/girl.jpg"></img>
        <FadeIn transitionDuration="3000" delay="2000">
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
          <FadeIn transitionDuration="2000" delay="4000">
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
