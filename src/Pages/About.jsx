import React from 'react'
import AboutUsSection from './Inc/AboutUsSection'
import Navbars from '../Components/Routes/Navbar'

export default function About() {
  return (
    <>
    <div style={{backgroundColor:'rgba(0,0,0,0.8)',}}>
    <Navbars />
    </div>
      <div className="page-heading header-text" style={{marginTop:'1%'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="breadcrumb">
                <a href="#">Home</a> / Manissha 1
              </span>
              <h3>Manissha 1</h3>
            </div>
          </div>
        </div>
      </div>
      <AboutUsSection />
    </>
  )
}
