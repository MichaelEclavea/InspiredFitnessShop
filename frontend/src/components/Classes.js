import React, {useEffect, useState} from 'react'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import {Link} from 'react-scroll'
import {Container, Row, Col} from 'react-bootstrap'
import '../styles/classes.css'

const Classes = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  return (
    <div id="classes">
      <h1 className="class-title">Classes</h1>
      <Container className="class-container">
        <Fade
          left={isDesktop}
          bottom={isMobile}
          transitionDuration="2000"
          duration="1000"
          delay="500"
          distance="30px"
        >
          <Row className="class-row">
            <Col>
              <h3 className='class-headers'>Kid's Class</h3>
              <hr className='hr'></hr>
              <p>Days: Mon, Wed, Fri</p>
              <hr className='hr'></hr>
              <p>
                Dolor ut eu voluptate adipisicing mollit ut nisi nulla mollit.
                Cillum reprehenderit dolor tempor exercitation amet sint
                reprehenderit velit est. Occaecat laboris adipisicing ipsum
                magna cupidatat Lorem..
              </p>
            </Col>
            <Col>
              <Tilt
                options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}
              >
                <img src="./images/Kids.jpg" className="class-img"></img>
              </Tilt>
            </Col>
          </Row>
        </Fade>

        <Fade
          right={isDesktop}
          bottom={isMobile}
          transitionDuration="2000"
          duration="1000"
          delay="500"
          distance="30px"
        >
          <Row className="class-row">
            <Col>
              <h3 className='class-headers'>Youth Class</h3>
              <hr className='hr'></hr>
              <p>Days: Mon, Wed, Fri</p>
              <hr className='hr'></hr>
              <p>
                Dolor ut eu voluptate adipisicing mollit ut nisi nulla mollit.
                Cillum reprehenderit dolor tempor exercitation amet sint
                reprehenderit velit est. Occaecat laboris adipisicing ipsum
                magna cupidatat Lorem.
              </p>
            </Col>
            <Col>
              <Tilt
                options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}
              >
                <img src="./images/girl.jpg" className="class-img"></img>
              </Tilt>
            </Col>
          </Row>
        </Fade>

        <Fade
          right={isDesktop}
          bottom={isMobile}
          transitionDuration="2000"
          duration="1000"
          delay="500"
          distance="30px"
        >
          <Row className="class-row">
            <Col>
              <h3 className='class-headers'>Adult Class</h3>
              <hr className='hr'></hr>
              <p>Days: Mon, Wed, Fri</p>
              <hr className='hr'></hr>
              <p>
                Dolor ut eu voluptate adipisicing mollit ut nisi nulla mollit.
                Cillum reprehenderit dolor tempor exercitation amet sint
                reprehenderit velit est. Occaecat laboris adipisicing ipsum
                magna cupidatat Lorem.
              </p>
            </Col>
            <Col>
              <Tilt
                options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}
              >
                <img src="./images/Adult.jpg" className="class-img"></img>
              </Tilt>
            </Col>
          </Row>
        </Fade>
      <section id="up-icon-section">
      <Link to="header" smooth duration={1000}>
        <Fade>
          <i
            className="fa fa-angle-up fa-2x"
            aria-hidden="true"
            id="up-icon"
          ></i>
        <strong>Back to top</strong>
        </Fade>
      </Link>
      </section>
      </Container>
    </div>
  )
}

export default Classes
