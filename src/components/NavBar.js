import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import flagth from '../assets/img/thai.png';
import flagen from '../assets/img/eng.png';
import cvA from '../assets/doc/cv_th_download.pdf';
import cvB from '../assets/doc/cv_en_download.pdf';
import reA from '../assets/doc/resume_th_download.pdf';
import reB from '../assets/doc/resume_en_download.pdf';
import '../App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = ({ language, setLanguage }) => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  // ข้อความตามภาษาที่เลือก
  const textContent = {
    en: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      letsProfile: "Download CV. & Resume",
      engi:"Computer engineering"
    },
    th: {
      home: "หน้าแรก",
      skills: "ทักษะ",
      projects: "โครงการ",
      letsProfile: "Download CV. & Resume",
      engi:"วิศวกรรมคอมพิวเตอร์"
    }
  };

  const currentText = textContent[language];
  const [isHovered, setIsHovered] = useState(false);
  ///////////////////////////////////////////////

  const downloadFile = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" className="navbar-brand-custom"> 
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="engi-class">{currentText.engi}</span>
           
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{currentText.home}</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{currentText.skills}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{currentText.projects}</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://line.me/ti/p/fvUxhem5iE"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/Goodnothing15229"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/ded2ec15229?igsh=MWV0bmt4bzVyeGRpdA%3D%3D&utm_source=qr"><img src={navIcon3} alt="" /></a>
              </div>
               <div className="dropdown">
                <button className="vvd"><span>{currentText.letsProfile}</span></button> 
                <div className="dropdown-content">
                  <button onClick={() => downloadFile(cvA, "cv_th_download.pdf")}>Cv. ภาษาไทย</button>
                  <button onClick={() => downloadFile(cvB, "cv_en_download.pdf")}>Cv. English</button>
                  <button onClick={() => downloadFile(reA, "resume_th_download.pdf")}>Resume ภาษาไทย</button>
                  <button onClick={() => downloadFile(reB, "resume_en_download.pdf")}>Resume English</button>
                </div>
            
                </div>
            </span>
          </Navbar.Collapse>
        </Container> 
        <div className="section">
        <img className={`language-button ${isHovered ? 'zoom' : ''}`}onClick={() => setLanguage('en')}src={flagen}alt="English"onMouseEnter={() => setIsHovered(true)}onMouseLeave={() => setIsHovered(false)}/>
        <img className="language-button" onClick={() => setLanguage('th')} src={flagth} alt="" />
        </div>
      </Navbar>
    </Router>
  )
}