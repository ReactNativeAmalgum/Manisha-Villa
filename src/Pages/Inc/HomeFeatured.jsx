import React, { useState } from 'react'
import { LiaFileContractSolid } from 'react-icons/lia'
import manish1Img from '../../Assets/Images/Manisha1/indexManish1'
import '../../App.css'

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className="accordion-button"
                    type="button"
                    onClick={onToggle}
                >
                    {title}
                </button>
            </h2>
            {isOpen && (
                <div className="accordion-body">
                    {content}
                </div>
            )}
        </div>
    );
};

const CustomAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            <AccordionItem
                title="What makes our bungalow the perfect location for your next shoot?"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                isOpen={openIndex === 0}
                onToggle={() => toggleItem(0)}
            />
            <AccordionItem
                title="How do we ensure a seamless experience for production teams?"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                isOpen={openIndex === 1}
                onToggle={() => toggleItem(1)}
            />
            <AccordionItem
                title="Why choose us for your next project?"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                isOpen={openIndex === 2}
                onToggle={() => toggleItem(2)}
            />
        </div>
    );
};

export default function HomeFeatured() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the accordion state
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="featured section">
            <div className="container">
                <div className="row custom-row">
                    <div className="col-lg-4 custom-col">
                        <div className="left-image">
                            <img style={{ height: '100%', width:'100%', objectFit:'cover', }} src={manish1Img.BUFFEE} alt="" />
                            <a href="property-details.html">
                                <LiaFileContractSolid style={{ color: 'white', fontSize: 64 }} />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 custom-col">
                        <div className="section-heading special-heading">
                            <h6>| Why choose us</h6>
                            <h2>Best Bunglow for Shoot</h2>
                        </div>
                        <div className="accordion" id="accordionExample">
                         <CustomAccordion />
                        </div>
                    </div>
                    <div className="col-lg-3 custom-col">
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
