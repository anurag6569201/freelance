import React from "react";
import '../../../assets/css/TeamMembers.css';
import main1 from '../../../assets/images/team/team.jpg';
import { Card, Container, Row, Col } from "react-bootstrap";

const TeamMembers = () => {
    const mainTeam = [
        {
            name: "Bryan Rafanelli",
            role: "Chief Creative Officer",
            img: main1,
            desc: "Bryan Rafanelli launched Rafanelli Events in 1996 as a three-person operation executing only a handful of events a year.",
        },
        {
            name: "Sophia Carter",
            role: "Head of Design",
            img: main1,
            desc: "Sophia is responsible for crafting unique design concepts that captivate clients and guests alike.",
        },
        {
            name: "Michael Reed",
            role: "Operations Director",
            img: main1,
            desc: "Michael ensures smooth execution of all events with meticulous attention to detail.",
        },
    ];

    const otherMembers = [
        { name: "Mariel Amelin", role: "Accounting Manager", img: main1 },
        { name: "Paige Anderson", role: "Event Producer", img: main1 },
        { name: "Taryn Antoniou", role: "Senior Designer", img: main1 },
        { name: "Hara Aoki-Saffer", role: "Senior Event Producer", img: main1 },
    ];

    return (
        <Container className="py-5" id="team">
            <h2 className="text-center mb-4 pb-4">Meet Our Team</h2>
            
            <Row className="justify-content-center mb-4">
                {mainTeam.map((member, index) => (
                    <Col key={index} md={12} className="mb-4">
                        <Card className="h-100 border-0 d-flex flex-row align-items-center">
                            <Card.Img variant="left" src={member.img} className="rounded-start" style={{ width: '40%', height: '100%', objectFit: 'cover' }} />
                            <Card.Body className="p-5">
                                <Card.Title className="fw-bold fs-2">{member.name}</Card.Title>
                                <Card.Subtitle className="text-muted mb-2 fs-5 mb-5">{member.role}</Card.Subtitle>
                                <Card.Text className="fs-5">{member.desc}</Card.Text>
                                <a href="">View Bio +</a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row className="text-center mt-5">
                {otherMembers.map((member, index) => (
                    <Col key={index} xs={6} md={3} className="mb-4">
                        <Card className="h-100 shadow-sm border-0">
                            <Card.Img variant="top" src={member.img} className="rounded-circle mx-auto mt-3" style={{ width: '140px', height: '140px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title className="fs-6 fw-bold">{member.name}</Card.Title>
                                <Card.Subtitle className="text-muted fs-6">{member.role}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default TeamMembers;