import React from "react";
import { Col, Row } from "react-bootstrap";
import BlenderLogo from "../../Assets/blender_logo.png";
import DavinciLogo from "../../Assets/davinci.png";
import {
  SiVisualstudiocode,
  SiUbuntu,
  SiGithub,
  SiJupyter,
  SiGooglecolab
} from "react-icons/si";

function Toolstack() {
  return (<>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
    </Row>
    {/* Other Tools Section (Blender & DaVinci) */}
    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Other Tools</h2>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={BlenderLogo} alt="Blender" style={{ width: "182px", height: "55px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={DavinciLogo} alt="DaVinci Resolve" style={{ width: "120px", height: "120px" }} />
      </Col>
    </Row>
    </>
  );
}

export default Toolstack;
