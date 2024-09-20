import React from 'react'
import ContactPageSection from './Inc/ContactPageSection'
import Navbars from '../Components/Routes/Navbar'

export default function Contact() {
  return (
    <>
      <div style={{ backgroundColor: 'rgba(0,0,0,0.8)', }}>
        <Navbars />
      </div>
      <div className="page-heading header-text" style={{marginTop:'1%'}} >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="breadcrumb">
                <a href="#">Home</a> / Contact Us
              </span>
              <h3>Contact Us</h3>
            </div>
          </div>
        </div>
      </div>
      <ContactPageSection />
    </>
  )
}
