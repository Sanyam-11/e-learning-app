import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Img1 from "../Images/4.png";
import "../App.css";

const HomeScreen = () => {
  return (
    <>
      <Col md={4}>
        <h1 className="text">Learn</h1>
        <h1 className="text">Without</h1>
        <h1 className="text">Limits</h1>
        <p className="small">
          Take the next step in your career with a world class learning
          experience.
        </p>
        <br />
        <p className="small">
          <Link to="/courses">
            <Button variant="primary">See Latest Courses</Button>
          </Link>
        </p>
      </Col>
      <Col md={6}>
        <div className="image">
          <img className="d-block w-100" src={Img1} height="450" alt="Learn" />
        </div>
      </Col>
    </>
  );
};

export default HomeScreen;
