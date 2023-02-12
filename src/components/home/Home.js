import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import SignUp from "../signUp/SignUp";
// import SignUp from "../signUp/SignUp";

const Home = () => {
  return (
    <>
      <div className="App-header">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <h1>Saylani Welfare</h1>
        </div>
        <div>
          <Link to="signup" href="signUp">
            <Button variant="success" >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
