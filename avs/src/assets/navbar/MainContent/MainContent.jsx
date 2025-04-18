import React from 'react';
import { Card, Row, Col, Dropdown } from 'react-bootstrap';
import { BiChevronDown, BiUpArrowAlt } from 'react-icons/bi';
import './MainContent.css'; 
import img1 from '../../images/chartimg.png'

const ChartPlaceholder = () => (
  <div style={{borderRadius: '4px', marginTop: '20px',display:'flex' }}>
    <img src={img1} alt="" style={{width:'100%',objectFit:'contain',borderRadius:'10px'}}/>
  </div>
);


function MainContent() {
  return (
    <div className="main-content p-4 py-2">
      {/* Header Row */}
      <Row className="mb-1 align-items-center">
        <Col xs="12">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" size="lg" className="d-flex align-items-center" style={{gap:'10px',paddingLeft:'0px'}}>
              KE
            </Dropdown.Toggle>
          </Dropdown>
        </Col>
      </Row>
      <hr className='pt-0 mt-0'/>
      <div className='mb-4 mt-4' style={{display:'flex',alignItems:'center',justifyContent:'left',gap:'10px'}}>
          <h2 className="mb-0 main-title">Overview</h2>
          <div style={{border:'1px solid #ccc',width:'2px',height:'100%'}}><span style={{opacity:'0'}}>|</span></div>
          <small style={{color:'#AEAEB8',fontWeight:'700'}}>Portfolio data refer to 19-04-2025</small>
      </div>

      {/* Overview Card */}
      <Card className="overview-card shadow-lg border-0">
        <Card.Body>
          <Card.Title className="mb-4">Total Outstanding</Card.Title>
          <Row className="align-items-center">
            <Col md={6}>
              <p className="text-muted mb-1"><b>16</b> Loans</p>
              <span className="amount mb-1">43.1K</span><span className='px-2'>KES</span>
            </Col>
            <Col md={6} className="text-md-end evolution-text">
              <span className="text-muted">Evolution Past 6 months</span>
              <span className="text-success ms-2 fw-bold">
                <BiUpArrowAlt /> 62,897.0 %
              </span>
            </Col>
          </Row>
          {/* Chart Placeholder */}
          <ChartPlaceholder />
        </Card.Body>
      </Card>

      {/* Other content cards/sections can go here */}
    </div>
  );
}

export default MainContent;