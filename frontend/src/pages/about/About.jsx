import AboutSlider from "./components/aboutSlider";
import ManagementAbout from "./components/management";
import ServiceOffer from "./components/servicesoffer";
import TeamMembers from "./components/TeamMembers";

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function AboutPage(){
    const location = useLocation();
        const { pathname, hash } = location;
        useEffect(() => {
            if (hash) {
                const elementId = hash.slice(1);
                const element = document.getElementById(elementId);
    
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        }, [hash]);
    
        useEffect(() => {
            if (!hash) {
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
            }
        }, [pathname, hash]);
    
    return(
        <>
            <AboutSlider/>
            <ManagementAbout/>
            <ServiceOffer/>
            <TeamMembers/>
        </>
    )
}

export default AboutPage;