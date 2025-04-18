import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './assets/navbar/Sidebar/Sidebar';
import MainContent from './assets/navbar/MainContent/MainContent';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  return (
    <Container fluid className="p-0"> 
      <Row className="g-0"> 
        <Col xs={4} sm={3} md={3} lg={2}>
          <Sidebar />
        </Col>

        <Col xs={8} sm={9} md={9} lg={10}>
          <MainContent />
        </Col>
      </Row>
    </Container>
  );
}

export default App;