import React, { useState } from 'react';
import { LiaFileContractSolid } from 'react-icons/lia';
import manish1Img from '../../Assets/Images/Manisha1/indexManish1';
import '../../App.css';
import homeFeature from './HomeFeature.css'
import manish2Img from '../../Assets/Images/Manisha2/IndexMansihs2';

// Manisha 1 Component
const Manisha1Component = () => {
  return (
    <div className="row custom-row">
      <div className="col-lg-4 custom-col">
        <div className="left-image">
          <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={manish1Img.GARDEN3} alt="" />
          <a href="property-details.html">
            <LiaFileContractSolid style={{ color: 'white', fontSize: 64 }} />
          </a>
        </div>
      </div>
      <div className="col-lg-5 custom-col">
        <div className="section-heading special-heading">
          <h6>| Why choose us</h6>
          <h2>Best Bungalow for Shoot</h2>
        </div>
        <div className="accordion">
          <CustomAccordion />
        </div>
      </div>
      <div className="col-lg-3 custom-col">
        <div className="info-table">
          <ul>
            <li>
              <img src="https://themewagon.github.io/VillaAgency/assets/images/info-icon-01.png" alt="" style={{ maxWidth: 52 }} />
              <h4>
                250 m2
                <br />
                <span>Total Flat Space</span>
              </h4>
            </li>
            <li>
              <img src="https://themewagon.github.io/VillaAgency/assets/images/info-icon-02.png" alt="" style={{ maxWidth: 52 }} />
              <h4>
                Contract
                <br />
                <span>Contract Ready</span>
              </h4>
            </li>
            <li>
              <img src="https://themewagon.github.io/VillaAgency/assets/images/info-icon-03.png" alt="" style={{ maxWidth: 52 }} />
              <h4>
                Payment
                <br />
                <span>Payment Process</span>
              </h4>
            </li>
            <li>
              <img src="https://themewagon.github.io/VillaAgency/assets/images/info-icon-04.png" alt="" style={{ maxWidth: 52 }} />
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
  );
};

// Demo Manisha 2 Component
const Manisha2Component = () => {
  return (
    <div className="row custom-row">
      <div className="col-lg-4 custom-col">
        <div className="left-image">
          <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={manish2Img.LIVING3} alt="Manisha 2 Placeholder" />
          <a href="property-details.html">
            <LiaFileContractSolid style={{ color: 'white', fontSize: 64 }} />
          </a>
        </div>
      </div>
      <div className="col-lg-5 custom-col">
        <div className="section-heading special-heading">
          <h6>| Discover Manisha 2</h6>
          <h2>Explore Manisha 2's Amenities</h2>
        </div>
        <div className="accordion">
          <CustomAccordion2 />
        </div>
      </div>
      <div className="col-lg-3 custom-col">
        <div className="info-table">
          <ul>
            <li>
              <img src="https://themewagon.github.io/VillaAgency/assets/images/info-icon-01.png" alt="" style={{ maxWidth: 52 }} />
              <h4>
                300 m2
                <br />
                <span>Total Space</span>
              </h4>
            </li>
            <li>
              <img src="https://themewagon.github.io/VillaAgency/assets/images/info-icon-02.png" alt="" style={{ maxWidth: 52 }} />
              <h4>
                Ready
                <br />
                <span>Immediate Availability</span>
              </h4>
            </li>
            <li>
              <img src="https://themewagon.github.io/VillaAgency/assets/images/info-icon-03.png" alt="" style={{ maxWidth: 52 }} />
              <h4>
                Security
                <br />
                <span>24/7 Surveillance</span>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Custom Accordion Component
const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" onClick={onToggle}>
        {title}
      </button>
    </h2>
    {isOpen && <div className="accordion-body">{content}</div>}
  </div>
);

const CustomAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <AccordionItem
        title="What makes our bungalow the perfect location for your next shoot?"
        content='Manisha 1 is the ideal location for your shoot, offering a diverse range of unique settings like a Mandir, Wooden Cottage, and Police Station, along with essential amenities to ensure a smooth production experience.'
        isOpen={openIndex === 0}
        onToggle={() => toggleItem(0)}
      />
      <AccordionItem
        title="How do we ensure a seamless experience for production teams?"
        content="At Manisha 1, we ensure a seamless experience for production teams by providing comprehensive amenities, including dedicated makeup rooms, dressing rooms, and a fully equipped kitchen, along with a friendly staff to assist with any needs during the shoot."
        isOpen={openIndex === 1}
        onToggle={() => toggleItem(1)}
      />
      <AccordionItem
        title="Why choose us for your next project?"
        content="Choose Manisha 1 for your next project because of our diverse film-ready settings, including unique backdrops and essential amenities that cater to all production needs, ensuring a creative and efficient shooting environment."
        isOpen={openIndex === 2}
        onToggle={() => toggleItem(2)}
      />
    </div>
  );
};
const CustomAccordion2 = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleItem = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="accordion">
        <AccordionItem
          title="What makes Manisha 2 an ideal venue for hosting parties?"
          content='Manisha 2 offers a spacious and versatile setting for both daytime and nighttime events, with modern amenities and ample outdoor space, making it perfect for any kind of celebration.'
          isOpen={openIndex === 0}
          onToggle={() => toggleItem(0)}
        />
        <AccordionItem
          title="Can we customize the food options for our event at Manisha 2?"
          content="Yes, Manisha 2 provides flexible catering through an ALA carte menu, allowing you to tailor the food selection to suit your event and guests’ preferences."
          isOpen={openIndex === 1}
          onToggle={() => toggleItem(1)}
        />
        <AccordionItem
          title="How does Manisha 2 ensure a hassle-free event experience?"
          content="Manisha 2 ensures a hassle-free event experience by offering convenient booking options, including advance payment flexibility, and a well-organized space that’s fully equipped to accommodate large groups."
          isOpen={openIndex === 2}
          onToggle={() => toggleItem(2)}
        />
      </div>
    );
  };
// Main Component with Toggle Functionality
export default function HomeFeatured() {
  const [selectedManisha, setSelectedManisha] = useState('manisha1');

  return (
    <div className="featured section">
      <div className="container">
        <div className='btn-homefeature-cont'>
          <button className='homeFeatureBtn' onClick={() => setSelectedManisha('manisha1')}>Manisha 1</button>
          <button className='homeFeatureBtn' onClick={() => setSelectedManisha('manisha2')}>Manisha 2</button>
        </div>
        {selectedManisha === 'manisha1' ? <Manisha1Component /> : <Manisha2Component />}
      </div>
    </div>
  );
}
