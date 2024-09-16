import React from 'react'
import AboutUsSection from './Inc/AboutUsSection'
import AboutOwnerSection from './Inc/AboutOwnerSection'

export default function AboutOwner() {
  return (
    <>
      <div className="page-heading header-text" style={{ marginTop: '1%' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="breadcrumb">
                <a href="#">Home</a> / About us
              </span>
              <h3>About Owner</h3>
            </div>
          </div>
        </div>
      </div>
      <AboutOwnerSection />
    </>
  )
}
