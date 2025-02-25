import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { MdBuild } from 'react-icons/md';
import { FaMicrochip } from 'react-icons/fa';
import { MdMemory } from 'react-icons/md';
import { FaHdd } from 'react-icons/fa';
import { FaNetworkWired } from 'react-icons/fa';
import { GiElectric} from 'react-icons/gi';
import { FaRobot, FaAtom, FaCube, FaSignal } from 'react-icons/fa';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kavindar</span> 
            <br />
            I am currently pursuing a B.Tech in Computer Science and Business Systems 
            at RMK Engineering College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity"><MdBuild /> Fixing Stuff</li>
            <li className="about-activity"><MdMemory /> Learn about Hardware and Computer Components</li>
            <li className="about-activity"><FaAtom /> Exploring New Technologies</li>
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
