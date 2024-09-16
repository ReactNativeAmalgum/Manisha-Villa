import React from 'react'
import featured from '../../Components/Assets/featured.jpg'
import { LiaFileContractSolid } from 'react-icons/lia'
export default function HomeFeatured() {
    return (
        <div className="featured section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="left-image">
                            <img style={{ height: '100%', objectFit: 'cover' }} src={featured} alt="" />
                            <a href="property-details.html">
                                <LiaFileContractSolid style={{ color: 'white', fontSize: 64 }} />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="section-heading">
                            <h6>| Why choose us</h6>
                            <h2>Best Bunglow for Shoot</h2>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        What makes our bungalow the perfect location for your next shoot?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        How do we ensure a seamless experience for production teams?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Why choose us for your next project?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequats
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="info-table">
                            <ul>
                                <li>
                                    <img
                                        src="https://themewagon.github.io/VillaAgency/assets/images/info-icon-01.png"
                                        alt=""
                                        style={{ maxWidth: 52 }}
                                    />
                                    <h4>
                                        250 m2
                                        <br />
                                        <span>Total Flat Space</span>
                                    </h4>
                                </li>
                                <li>
                                    <img
                                        src="https://themewagon.github.io/VillaAgency/assets/images/info-icon-02.png"
                                        alt=""
                                        style={{ maxWidth: 52 }}
                                    />
                                    <h4>
                                        Contract
                                        <br />
                                        <span>Contract Ready</span>
                                    </h4>
                                </li>
                                <li>
                                    <img
                                        src="https://themewagon.github.io/VillaAgency/assets/images/info-icon-03.png"
                                        alt=""
                                        style={{ maxWidth: 52 }}
                                    />
                                    <h4>
                                        Payment
                                        <br />
                                        <span>Payment Process</span>
                                    </h4>
                                </li>
                                <li>
                                    <img
                                        src="https://themewagon.github.io/VillaAgency/assets/images/info-icon-04.png"
                                        alt=""
                                        style={{ maxWidth: 52 }}
                                    />
                                    <h4>
                                        Safety
                                        <br />
                                        <span>24/7 Under Control</span>
                                    </h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
