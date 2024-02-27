import React from 'react'
import {Element} from 'react-scroll'
import './Contact.css'
import { IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <div>
      <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className="contact_container">
            <p>
                Email : <span>manosree.vnb@gmail.com</span>
            </p>
            <p>
                GitHub Username: <span>Mano Sree K</span>
            </p>
            <div className="contact_icons">
                <a href="google.com">
                   <IconButton>
                    <LinkedInIcon/>
                   </IconButton>
                </a>
                <a href="google.com">
                   <IconButton>
                    <FacebookIcon/>
                   </IconButton>
                </a>
                <a href="google.com">
                   <IconButton>
                    <InstagramIcon/>
                   </IconButton>
                </a>
            </div>
        </div>
      </Element>
    </div>
  )
}

export default Contact
