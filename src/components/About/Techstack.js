import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiGooglecloud,
  SiDocker,
  SiRaspberrypi,
  SiNvidia,
  SiArduino,
  SiVirtualbox,
  SiKubernetes,
} from "react-icons/si";
import { FaLinux } from "react-icons/fa";

// Import PNG images for Blender and DaVinci Resolve


function Techstack() {
  return (
    <>
      {/* Professional Tech Stack */}
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Tech Stack</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGooglecloud />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiKubernetes />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVirtualbox />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiArduino />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRaspberrypi />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNvidia />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaLinux />
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
