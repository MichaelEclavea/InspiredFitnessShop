import React, {useEffect, useState} from 'react'
import FadeIn from 'react-fade-in'
import Tilt from 'react-tilt'
import {Container, Row, Col, Fade} from 'react-bootstrap'
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
        <FadeIn
          left={isDesktop}
          bottom={isMobile}
          transitionDuration="2000"
          duration="1000"
          delay="500"
          distance="30px"
        >
          <Row className="class-row">
            <Col>
              <h3>Kid's Class</h3>
              <p>Days: Mon, Wed, Fri</p>
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
                <img src="./images/Kids.jpg" className="class-img"></img>
              </Tilt>
            </Col>
          </Row>
        </FadeIn>

        <FadeIn
          right={isDesktop}
          bottom={isMobile}
          transitionDuration="2000"
          duration="1000"
          delay="1500"
          distance="30px"
        >
          <Row className="class-row">
            <Col>
              <h3>Youth Class</h3>
              <p>Days: Mon, Wed, Fri</p>
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
        </FadeIn>

        <FadeIn
          right={isDesktop}
          bottom={isMobile}
          transitionDuration="2000"
          duration="1000"
          delay="2500"
          distance="30px"
        >
          <Row className="class-row">
            <Col>
              <h3>Adult Class</h3>
              <p>Days: Mon, Wed, Fri</p>
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
        </FadeIn>
      </Container>
    </div>
  )
}

export default Classes
