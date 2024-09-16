import React from 'react'
import ContactPageSection from './Inc/ContactPageSection'

export default function Contact() {
  return (
    <>
      <div className="page-heading header-text" style={{marginTop:'1%'}}>
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
