import React, { useLayoutEffect, useState } from "react";
import { Image } from "antd";
import '../GalleryPage.css'
import { WorkTab2 } from "../../Inc/Worktab";
import Navbars from "../../Components/Routes/Navbar";
function Gallery2() {
  const [items, setItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setItems(WorkTab2);
  }, []);

  const filterItems = (category) => {
    setActiveFilter(category); // Set active filter regardless of category

    if (category === "All") {
      setItems(WorkTab2); // Reset to all items when 'All' is clicked
    } else {
      const updatedItems = WorkTab2.filter((item) => item.category === category); // Filter based on category
      setItems(updatedItems);
    }
  };

  const interiorWorkContent = [
    {
      descp1:
        "Transforming your space into a masterpiece requires expert attention to detail and a deep understanding of your vision. At Hny Studio, we excel in delivering top-notch interior work tailored specifically to the needs of clients in Thane. Our team of skilled interior designers is dedicated to enhancing the functionality and aesthetics of your environment, whether it's a residential, commercial, or architectural project.",
    },


  ];

  return (
    <>
    <div style={{backgroundColor:'rgba(0,0,0,0.8)',}}>
    <Navbars />
    </div>
      <div className="page-heading header-text" style={{marginTop:'1%'}} >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="breadcrumb">
                <a href="#">Home</a> / Gallery
              </span>
              <h3>Manissha 2's Gallery</h3>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="gall-banner">
          <div className="contacttt-p">
            <h1 style={{ color: 'white' }} >Gallery</h1>
          </div>
        </div>
      </section>

      <section id="project-version-one">
        <div className="container">
          <div className="row">

          </div>
          <div className="row">
            <div className="col-lg-12">
              <div style={{marginBottom:0}} className="section-heading">
                <h6>| Our Gallery</h6>
                <h2>Explore Stunning Moments, Frame by Frame</h2>
              </div>
              <div className="interior-work-container">
                {interiorWorkContent.map((item, index) => (
                  <p key={index} className="interior-work-paragraph">
                    {item.descp1}
                  </p>
                ))}
              </div>
              <ul style={{ marginBottom: '5%' }} className="gallery-filter">
                <li
                  data-filter="all"
                  onClick={() => filterItems("All")}
                  className={`filter ${activeFilter === "All" ? "active" : ""}`}
                >
                  <span>All</span>
                </li>

                <li
                  data-filter=".kitchen"
                  onClick={() => filterItems("dining")}
                  className={`filter ${activeFilter === "dining" ? "active" : ""}`}
                >
                  <span>Dinning</span>
                </li>
                <li
                  data-filter=".manisha"
                  onClick={() => filterItems("manisha")}
                  className={`filter ${activeFilter === "manisha" ? "active" : ""}`}
                >
                  <span>Manissha</span>
                </li>
                <li
                  data-filter=".events"
                  onClick={() => filterItems("kitchen")}
                  className={`filter ${activeFilter === "kitchen" ? "active" : ""}`}
                >
                  <span>KITCHEN</span>
                </li>

                <li
                  data-filter=".party"
                  onClick={() => filterItems("garden")}
                  className={`filter ${activeFilter === "garden" ? "active" : ""}`}
                >
                  <span>GARDEN</span>
                </li>
                <li
                  data-filter=".party"
                  onClick={() => filterItems("other")}
                  className={`filter ${activeFilter === "other" ? "active" : ""}`}
                >
                  <span>OTHERS</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row nor4al-gallery" id="image-gallery-mix">
            {items.map((v, i) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-sm-6 col-xs-12 concert party mix"
                    style={{ display: "inline-block", height: 380, }}
                  >
                    <div
                      style={{ width: "100%", height: "100%" }}
                      className="img-wrap"
                    >
                      <Image
                        width={"100%"}
                        height={"100%"}
                        // style={{ width: "100%", height: "100%" }}
                        src={v.imageUr1}
                        alt=""
                      />

                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}

export default Gallery2;

