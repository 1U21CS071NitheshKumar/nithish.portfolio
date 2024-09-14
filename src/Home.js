import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../src/home.css';
import { Link } from 'react-scroll';
import { Button, Row, Col, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import img1 from './image/img1.png';
import img2 from './image/img2.svg';
import img3 from './image/img3.svg'
import img4 from './image/img4.svg'
import img5 from './image/img5.svg'
import img6 from './image/img6.svg'
import img7 from './image/img7.svg'
import img8 from './image/img8.svg'
import img9 from './image/img9.svg'
import img10 from './image/img10.png'
import img11 from './image/img11.png'
import img12 from './image/img12.png'
import img13 from './image/img13.png'
import img14 from './image/img14.png'
import img15 from './image/img15.png'
import img16 from './image/img16.png'
import img17 from './image/img17.png'
import img18 from './image/img18.png'



function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('');

  // Handler to switch tabs
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

const AnimationComponent = () => {
  const [animate, setAnimate] = useState(false);

  const handleRefresh = () => {
    setAnimate(false); // Reset animation
    setTimeout(() => {
      setAnimate(true); // Trigger animation
    }, 100); // Short delay to ensure reset
  };
}

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4ee3249d-c133-4f95-af2d-6701569c3dd9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "success",
        text: "Message sent successfully",
        icon: "success"
      })    }
}
  return (
    <>
      <div>
      <nav>
        <div className="container">
          <p className="logo"><Link to="home" smooth={true} duration={500}>Portfolio</Link></p>
          <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="home" smooth={true} offset={(-100)} duration={100}>Home</Link></li>
              <li><Link to="about" smooth={true} offset={(-58)} duration={100}>About</Link></li>
              <li><Link to="experience" smooth={true} offset={(-60)} duration={100}>Experience</Link></li>
              <li><Link to="projects" smooth={true} offset={(-60)} duration={100}>Projects</Link></li>
              <li><Link to="contact" smooth={true} offset={(-60)} duration={100}>Contact</Link></li>
             
            </ul>
          </div>
        </div>
      </nav>
      </div>
      
      <div  id="home" className='z'>
        <Row className='x'>
          <Col lg={8}>
          
            <div className="intro-content">
              <p className='para'>Hi There,</p>
              <p className='para1'>I'm <span className='span1'>Nithish Kumar</span></p>
              <p className='para2'>a meran stack developer</p>
              <p className='para3'>
                at the start of my career. I’m excited to share my projects with you, showcasing my skills in creating engaging and functional web experiences.
                Take a look around, and feel free to get in touch if you’d like to discuss a potential collaboration or just connect.
              </p>
              <a href="./resumeimg.jpg" download >  <button className='button1'><span class="button1-content">Download CV</span></button></a>
            </div>
          </Col>
          <Col lg={4}>
            <img className='img1' src={img1} alt="Profile" />
          </Col>
        </Row>
      </div>

      {/* About Me Section */}
      <div className='line'></div>
      <div id="about" className='y'>
        <Row className='x'>
          <Col lg={5}>
            <img className='img2' src={img2} alt="About Me" />
          </Col>
          <Col lg={7}>
            <p className='about'>About Me</p>
            <p className='para4'>
              Hi, I'm Nithish Kumar. I'm from Vriddhachalam and I recently completed an internship in Frontend web development. I'm passionate about creating engaging and user-friendly web experiences and am excited to start my career in this dynamic field. I’m eager to bring my skills and enthusiasm to a forward-thinking organization where I can contribute to innovative projects and continue to grow professionally.
            </p>

            {/* Tabs */}
            <div className='tab-titles'>
              <p
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('skills')}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('Education')}
              >
                Education
              </p>
            </div>
            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              <ul>
                <li><span>HTML/CSS</span><br />Structure and Style Web Pages</li>
                <li><span>BOOTSTRAP</span><br />Responsive Design Framework</li>
                <li><span>JAVASCRIPT</span><br />Dynamic Web Functionality</li>
                <li><span>REACT JS</span><br />Component-Based Library</li>
                <li><span>AWS</span><br />Scalable Cloud Infrastructure Services</li>
                <li><span>MongoDB</span><br/>an open source, non-relational database management system  
                that stores and processes data in documents instead of tables and documents</li>
                <li><span>ExpressJS </span><br />to build a single page, multipage, and hybrid web application.</li>
                <li><span>NodeJS</span><br /> open source, cross-platform runtime environment and library that is used for
                 running web applications outside the client's browser.</li>

              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'Education' ? 'active-tab' : ''}`} id="Education">
              <ul>
                <li><span>B.Sc. Computer Science - (2024)</span><br />RVS College of Arts and Science</li>
                <li><span>HSC - (2021)</span><br />Velavan Matric Hr Sec School</li>
                <li><span>SSLC - (2019)</span><br />Bharath Matriculation School</li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className='line1'></div>
      </div>
      <div  id="experience"  className='w'>
        <Row className='x'>
          <Col lg={8}>
            <p className='exper'>Experience</p>
            <p className='para5'>Internship at Glacier Technology</p>
            <p className='para6'>Responsibilities:</p>
            <div className='para7'>
              <ul>
                <li> Developed responsive web pages for all devices..</li>
                <li> Utilized React.js to create interactive UI components.</li>
                <li> Cloned Facebook and Netflix webpages, ensuring responsiveness.</li>
                <li> Created mini-projects: portfolio, e-commerce, calculators, to-do list.</li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <img className='img3' src={img3} />
          </Col>
          <p className='para8'>Technologies Used</p>
          <div className="carousel-container">
            {/* Slider 1 */}
            <div className="carousel2" style={{
              '--width': '110px',
              '--height': '50px',
              '--quantity': '10',
              '--duration': '15s'
            }}>
              <div className="carousel__list">
                <img className="carousel__item " src={img4} style={{ '--position': '1' }}></img>
                <img className="carousel__item " src={img5} style={{ '--position': '2' }}></img>
                <img className="carousel__item" src={img6} style={{ '--position': '3' }}></img>
                <img className="carousel__item " src={img7} style={{ '--position': '4' }}></img>
                <img className="carousel__item " src={img8} style={{ '--position': '5' }}></img>
                <img className="carousel__item " src={img9} style={{ '--position': '6' }}></img>
                <img className="carousel__item " src={img4} style={{ '--position': '7' }}></img>
                <img className="carousel__item " src={img5} style={{ '--position': '8' }}></img>
                <img className="carousel__item" src={img6} style={{ '--position': '9' }}></img>
                <img className="carousel__item " src={img7} style={{ '--position': '10' }}></img>



              </div>
            </div>

          </div>
        </Row>
        <div className='line2'></div>
      </div>
      {/* Project */}
    
      <div id="projects" className='projects'>
      <Row className='x' >
        <Col lg={5}>
          <div>
            <Carousel className='ca1'>
              <Carousel.Item interval={1500}>
                <img
                  className="carousel1"
                  src={img10}
                />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img
                  className="carousel1"
                  src={img11}
                />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img
                  className="carousel1"
                  src={img12}
                />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img
                  className="carousel1"
                  src={img13}
                />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img
                  className="carousel1"
                  src={img14}
                />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img
                  className="carousel1"
                  src={img15}
                />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img
                  className="carousel1"
                  src={img16}
                />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img
                  className="carousel1"
                  src={img17}
                />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img
                  className="carousel1"
                  src={img18}
                />
              </Carousel.Item>


            </Carousel>
          </div>

        </Col>
        <Col lg={7}>
          <p className='poject'>Project</p>
          <p className='para9'>E-commerce - This is online shoping product</p>
          <p className='para10'>Our platform is designed to provide online product
            sales and delivery in my web site ,Then in this project am
            use for four language name is HTML,css,JAVASCRIPT and reactjs</p>
        </Col>
      </Row>
      <Row className='x'>
        <Col lg={6}>
          <p className='para11'>Mini Projects</p>
          <p className='para12'>Practiced Website clowns like Facebook Login/Signup, Netflix
            Webpage with mobile responsive.
            Created individual mini project Portfolio, 
            Calculators and Todo list</p>
        </Col>
        <Col lg={6}>
        </Col>
      </Row>
      </div>
      <div className='line3'></div>
      {/*------contact----- */}

      <div className='w'>
        <Row className='x'>
          <Col lg={12}>
            <p className='contact' >Contact Me</p>
            <Form onSubmit={onSubmit}>
              <Form.Control type="text" placeholder="Full Name" name='name' /><br />
              <Form.Control type="email" placeholder="Email" name='email' /><br />
              <Form.Control as="textarea" name='message' placeholder="Your Message" rows={8} /><br />
              <Button className='button2' type='submit' >Submit</Button>
            </Form>
          </Col>
        </Row>
      </div>
      <div className='line4'></div>
      <div className='y'>
        <Row className='x'>
          <Col lg={12}>
          <div className='font'>
          <a  target="_blank"><i class="bi bi-linkedin"></i></a>
          <i class="bi bi-envelope-at-fill"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter-x"></i>
          <i class="bi bi-github"></i>
          <i class="bi bi-telephone-fill"></i>
          </div>
          <div className='footer'>
            <ul className='ul1'>
              <li className='li1'>FAQ</li>
              <li  className='li1'>Project</li>
              <li  className='li1'>About</li>
              <li  className='li1'>Contact</li>
              <li  className='li1'>Privacy Policy</li>
            </ul>
            <p className='copyrights'>Website Created @Nithish Kumar</p>
          </div>
          </Col>
        </Row>

      </div>

    </>
  );
}

export default Home;
