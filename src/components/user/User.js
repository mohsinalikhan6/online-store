import { Carousel } from "antd";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Cards from "../cards/Cards";
import logo from '../images/logo.png'

const contentStyle = {
    height: '500px',
    background: '#fff',
    display:'flex',
    justifyContent:'center',
    color:'#0066b3'
  };
  

const User = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} width='50' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto right">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel autoplay effect="fade">
    <div>
      <h3 style={contentStyle}><img src='https://lh3.googleusercontent.com/cPq_Wp8Gl3GfkqfECpYutoulxH_Nkn5-1On99g9V66V9N9pPpyrMcWrJrF9M3aBc9l7_7wdp_jf85cmYg4-r8thWlBPhfhPIBt7GH6q8_Q=w600-rw' alt="saylaniPic" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src='https://penangfoodie.com/wp-content/uploads/2021/12/IMG_2107.jpeg' alt="test" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src='https://lh3.googleusercontent.com/cPq_Wp8Gl3GfkqfECpYutoulxH_Nkn5-1On99g9V66V9N9pPpyrMcWrJrF9M3aBc9l7_7wdp_jf85cmYg4-r8thWlBPhfhPIBt7GH6q8_Q=w600-rw' alt="pc" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src='https://penangfoodie.com/wp-content/uploads/2021/12/IMG_2107.jpeg' alt="aicourse" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src='https://penangfoodie.com/wp-content/uploads/2021/12/IMG_2107.jpeg' alt="pc2" /></h3>
    </div>
  </Carousel>
  <Cards />
  

    </>
  )
}

export default User
