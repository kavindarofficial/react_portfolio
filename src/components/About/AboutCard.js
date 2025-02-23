import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kavindar A </span> 
            from <span className="purple">Chennai, India.</span>
            <br />
            I am currently pursuing a B.Tech in Computer Science and Business Systems 
            at RMK Engineering College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Fixing Stuff
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn Hardware and Computer Components 
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I work in a place where '0's and '1's are the only language understood."
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
