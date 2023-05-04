import React from "react"
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons'
export default function Contact(){

return(
<> 

<h1 className="cont">Contact Us</h1>
      <div className='container'>
            <div className='contactForm'>
              <form id='contact-form' noValidate>
                {/* Row 1 of form */}
                  <div>
                    <input
                      type='text'
                      name='first name'
                      className='spec'
                      placeholder='First Name'
                    ></input>

                    <input
                      type='text'
                      name='last name'
                      className='spec1'
                      placeholder='Last Name'
                    ></input>

                  </div>
                  {/* Row 2 of form */}
                  <div>
                    <input
                      type='email'
                      name='email'
                      className='norm'
                      placeholder='Email address'
                    ></input>
                  </div>
                
                {/* Row 3 of form */}
                <div >
                    <textarea
                      rows={4}
                      name='message'
                      className='norm'
                      placeholder='Message'
                    ></textarea>
                  
                </div>
                <button className="btn" type='submit'>
                  SEND
                </button>
              </form>
            </div>
        </div>
             <br></br> <br></br> 
                <a className="social-media-icons-white" href="https://www.facebook.com/">
                 <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a className="social-media-icons-white" href="https://twitter.com/">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="social-media-icons-white" href="https://web.telegram.org/k/">
                <FontAwesomeIcon icon={faTelegram} />
                </a>


</> 
)

}