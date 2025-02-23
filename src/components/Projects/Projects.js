import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cuda from "../../Assets/Projects/cuda.png";
import disaster from "../../Assets/Projects/disaster.png";
import churn from "../../Assets/Projects/churn.png";
import rain from "../../Assets/Projects/rain.png";
import maintanence from "../../Assets/Projects/maintanence.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on,
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cuda}
              isBlog={false}
              title="RAG - Cuda Summarizer"
              description="A Retrieval-Augmented Generation (RAG) model using ChromaDB, LangChain, CUDA Docs, and Mistral LLM from Ollama that answers all your questions about Cuda Programming."
              ghLink="https://github.com/kavindarofficial/RAG_Cuda_Summarizer"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={churn}
              isBlog={false}
              title="Customer Churn Prediction"
              description="Predicting customer churn with high accuracy: Developed XGBoost and CatBoost models achieving 86.4% accuracy and 86.7% F1 score to help businesses retain valuable customers."
              ghLink="https://github.com/kavindarofficial/Apna_Guide/tree/main/Machine_Learning/Customer_Churn_Prediction"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rain}
              isBlog={false}
              title="Rainfall Prediction"
              description="Accurate precipitation forecasting: Designed a highly effective model using historical weather data to predict rainfall with near-perfect accuracy."
              ghLink="https://github.com/kavindarofficial/Apna_Guide/tree/main/Machine_Learning/Rainfall_Prediction"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disaster}
              isBlog={false}
              title="Disaster Prediction"
              description="Identifying potential disasters: Developed a predictive model with 79% accuracy using multi-source data analysis to help communities prepare for and respond to natural disasters."
              ghLink="https://github.com/kavindarofficial/Apna_Guide/tree/main/Machine_Learning/Disaster_or_Not"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maintanence}
              isBlog={false}
              title="Remaining Useful Life Prediction"
              description="Predicting equipment health with precision: Utilized sensor data to predict equipment remaining useful life with nearly 100% accuracy, enabling proactive maintenance and reducing downtime."
              ghLink="https://github.com/kavindarofficial/Apna_Guide/tree/main/Machine_Learning/Predictive_Maintenance"
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
