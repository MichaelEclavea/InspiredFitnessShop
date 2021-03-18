import React from 'react'
// import {Link} from 'react-router-dom'
import '../styles/contact.css'
import { Col, Row } from 'react-bootstrap'
// import FormContainer from '../components/FormContainer.js'


const ContactScreen = () => {
  // const [messageContent, setMessageContent] = useState({value: ''})
  // const [userName, setUserName] = useState({value: ''});
  // const [userEmail, setUserEmail] = useState({value: ''});
  // const userLogin = useSelector((state) => state.userLogin)
  // const { userInfo } = userLogin

  // useEffect(() => {
  //   if(userInfo) {
  //     setUserName({value: userInfo.name})
  //     setUserEmail({value: userInfo.email})
  //   }
  // }, [history, userInfo])

  // const submitHandler = (e) => {
  //   e.preventDefault()
  //   if (userName.value && userEmail.value && messageContent.value) {
  //     console.log('NAME', userName.value)
  //     console.log('EMAIL', userEmail.value)
  //     console.log('MESSAGE', messageContent.value)
  //     alert('Message sent successfully')
  //     history.push('/')
  //   }
  // }

  // const saveMessage = (e) => {
  //   setMessageContent({value: e.target.value})
  // }
  // const nameHandler = (e) => {
  //   setUserName({value: e.target.value})
  // }
  // const emailHandler = (e) => {
  //   setUserEmail({value: e.target.value})
  // }

  return (
    <div className='contact-container'>
    <div>
       <Row>
      <Col>
        <h3>Hours:</h3>
        <p>(Mon - Fri) 6pm - 10pm</p>
        <p>(Sat - Sun) 3pm - 9pm</p>
      </Col>
    </Row>
    </div>
    <hr className='hr'></hr>
   <Row>
      <Col>
        <h3>Adress:</h3>
        <p>302 South Route 4 #100, Hagåtña, 96910, Guam</p>
      </Col>
    </Row>
    <hr className='hr'></hr>
    <Row>
      <Col>
        <h3>Contact Info:</h3>
        <p>Phone: 1-671-477-6564</p>
        <p>Email: inspiredFitness671@gmail.com</p>
      </Col>
    </Row>
      {/* <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

        <h1 style={{textAlign: 'center'}}>Contact Us</h1>
        <Form onSubmit={submitHandler} action='contact-page' method='post'>
          <Form.Group>
          <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder='Enter name...' value={userName.value} onChange={nameHandler}></Form.Control>
            <br></br>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder='Enter email...' value={userEmail.value} onChange={emailHandler}></Form.Control>
            <br></br>
            <Col style={{margin: '0px', padding: '0px'}}>
              <textarea
                placeholder="Type Message..."
                value={messageContent.value}
                onChange={saveMessage}
                style={styles.textArea}
              />
            </Col>
          </Form.Group>
          <Button type="submit" variant="primary" style={styles.btn}>
            Send
          </Button>
        </Form> */}
    </div>
  )
}

// const styles = {
//   textArea: {
//     width: '100%',
//     height: '30vh',
//     padding: '15px',
//   },
//   btn: {
//     borderRadius: '5px',
//     marginTop: '10px',
//     marginLeft: '50%',
//     transform: 'translate(-50%, -50%)',
//   },
// }

export default ContactScreen
