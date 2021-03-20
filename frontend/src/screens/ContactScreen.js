import React from 'react'
import '../styles/contact.css'



const ContactScreen = () => {


  return (
    <div id='contact-container'>
      <section id='contact-title'>
        <h1 style={{fontWeight: 'bold'}}>GET IN TOUCH!</h1>
      </section>
      <div id='contact-two'>
        <div id='contact-text'>

          <h5>
            <strong>Softwear Inc.</strong>
          </h5>
          <h5>
            <strong>Mail Address:</strong>
          </h5>
          <p>
            Nulla magna qui consequat qui officia sit Lorem est culpa laborum
            ex.
          </p>
          <h5>
            <strong>Address:</strong>
          </h5>
          <p>
            Pariatur fugiat deserunt eiusmod officia adipisicing consectetur id
            labore labore aliqua.
          </p>
          <h5>
              <strong>Phone:</strong> 
          </h5>
          <p>
          1-800-123-4567
          </p>
        </div>
        <div id='contact-map'>
          <img id='contact-img' src="/images/maps.png"></img>
        </div>
      </div>
    </div>
  )
}

export default ContactScreen
