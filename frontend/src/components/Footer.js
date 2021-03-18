import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
const Footer = () => {
  return (
    <footer style={{bottom: '0', color: 'rgb(177, 177, 177)'}}>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Inspired Fitness & Training Facility 
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
