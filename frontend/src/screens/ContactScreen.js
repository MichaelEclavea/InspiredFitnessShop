import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Col} from 'react-bootstrap'
import FormContainer from '../components/FormContainer.js'
import {useSelector} from 'react-redux'

const ContactScreen = ({history}) => {
  const [messageContent, setMessageContent] = useState({value: ''})
  const [userName, setUserName] = useState({value: ''});
  const [userEmail, setUserEmail] = useState({value: ''});
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if(userInfo) {
      setUserName({value: userInfo.name})
      setUserEmail({value: userInfo.email})
    } 
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    if (userName.value && userEmail.value && messageContent.value) {
      console.log('NAME', userName.value)
      console.log('EMAIL', userEmail.value)
      console.log('MESSAGE', messageContent.value)
      alert('Message sent successfully')
      history.push('/')
    }
  }

  const saveMessage = (e) => {
    setMessageContent({value: e.target.value})
  }
  const nameHandler = (e) => {
    setUserName({value: e.target.value})
  }
  const emailHandler = (e) => {
    setUserEmail({value: e.target.value})
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <FormContainer>
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
        </Form>
      </FormContainer>
    </>
  )
}

const styles = {
  textArea: {
    width: '100%',
    height: '30vh',
    padding: '15px',
  },
  btn: {
    borderRadius: '5px',
    marginTop: '10px',
    marginLeft: '50%',
    transform: 'translate(-50%, -50%)',
  },
}

export default ContactScreen
