import React from 'react'
import Manisha2Section from './Inc/Manisha2Section'
import Navbars from '../Components/Routes/Navbar'

export default function Manisha2() {
  return (
    <>
    <div style={{backgroundColor:'rgba(0,0,0,0.8)',}}>
    <Navbars />
    </div>
      <div className="page-heading header-text" style={{ marginTop: '1%' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="breadcrumb">
                <a href="#">Home</a> / Manissha 2
              </span>
              <h3>Manissha 2</h3>
            </div>
          </div>
        </div>
      </div>
      <Manisha2Section />
    </>
  )
}
