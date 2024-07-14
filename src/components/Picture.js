import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import pic1 from '../assets/img/p1.jpg';
import pic2 from '../assets/img/p2.jpg';
import pic3 from '../assets/img/p3.jpg';
import pic4 from '../assets/img/p4.jpg';
import '../App.css';

export const Picture = ({ language }) => {
  const textContent = {
    en: [
      {
        pics: "Experience",
      },
      {
        label: "First slide label",
        description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      },
      {
        label: "Second slide label",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        label: "Third slide label",
        description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      },
      {
        label: "Fourth slide label",
        description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      },
    ],
    th: [
      {
        pics: "ประสบการณ์",
      },
      {
        label: "สไลด์แรก",
        description: "ไม่ว่าจะอยู่ในที่ว่างหรือมีการฝึกฝนที่ดีขึ้น",
      },
      {
        label: "สไลด์ที่สอง",
        description: "ตัวอย่างข้อความที่ใช้ในการพิมพ์และการเรียงพิมพ์",
      },
      {
        label: "สไลด์ที่สาม",
        description: "ตัวอย่างข้อความในการจัดเรียงที่เป็นที่รู้จักกันดี",
      },
      {
        label: "สไลด์ที่สี่",
        description: "ข้อความตัวอย่างนี้ได้รับการใช้ในการพิมพ์",
      },
    ],
  };

  const currentText = textContent[language];


  return (
    <div className="skill-bx wow zoomIn" id="skills">
         <h2>{currentText[0].pics}</h2> {/* Access the pics property */}
    <div className='Pic'>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem itemId={1}>
          <img src={pic4} className='d-block w-100 carousel-image' alt='...' />
          <MDBCarouselCaption>
            <h5>{currentText[0].label}</h5>
            <p>{currentText[0].description}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <img src={pic2} className='d-block w-100 carousel-image' alt='...' />
          <MDBCarouselCaption>
            <h5>{currentText[1].label}</h5>
            <p>{currentText[1].description}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <img src={pic3} className='d-block w-100 carousel-image' alt='...' />
          <MDBCarouselCaption>
            <h5>{currentText[2].label}</h5>
            <p>{currentText[2].description}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={4}>
          <img src={pic1} className='d-block w-100 carousel-image' alt='...' />
          <MDBCarouselCaption>
            <h5>{currentText[3].label}</h5>
            <p>{currentText[3].description}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </div>
    </div>
  );
}