import React from 'react';
import { InputGroup, FormControl, Nav } from 'react-bootstrap';
import {
    BiSearch,
    BiHomeAlt,
    BiUser,
    BiTag,
    BiCreditCardAlt, 
    BiCollection,
    BiMoney, 
    BiChevronRight,
    BiBuildings 
} from 'react-icons/bi';
import './Sidebar.css'; 

function Sidebar() {
    const navItems = [
        { icon: <BiHomeAlt size={20} />, text: 'Overview', active: true },
        { icon: <BiUser size={20} />, text: 'Customers' },
        { icon: <BiTag size={20} />, text: 'Offers' },
        { icon: <BiCreditCardAlt size={20} />, text: 'Loans' },
        { icon: <BiMoney size={20} />, text: 'Payments' },
        { icon: <BiCollection size={20} />, text: 'Collection' },
    ];

    return (
        <div className="sidebar vh-100 p-3 d-flex flex-column">
            {/* Logo Area */}
            <div className="logo-section d-flex align-items-center justify-content-between mb-4">
                <div className="d-flex align-items-center">
                    <BiBuildings size={30} className="me-2" /> {/* Placeholder Logo Icon */}
                    <span className="fw-bold fs-5">loans</span>
                </div>
                <BiChevronRight size={20} />
            </div>

            {/* Search Bar */}
            <InputGroup className="mb-4 search-bar p-0">
                <InputGroup.Text id="basic-addon1">
                    <BiSearch style={{color:'red'}}/>
                </InputGroup.Text>
                <FormControl placeholder="Search" aria-label="Search" aria-describedby="basic-addon1" />
            </InputGroup>

            {/* Navigation */}
            <Nav className="flex-column sidebar-nav">
                {navItems.map((item, index) => (
                    <Nav.Link
                        key={index}
                        href="#" 
                        className={`d-flex align-items-center mb-2 p-2 sidebar-link ${item.active ? 'active' : ''}`}
                    >
                        <span className="me-3 fs-7">{item.icon}</span>
                        <span>{item.text}</span>
                    </Nav.Link>
                ))}
            </Nav>

            <div className="flex-grow-1"></div>

        </div>
    );
}

export default Sidebar;