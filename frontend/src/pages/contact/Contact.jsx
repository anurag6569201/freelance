import ContactBreadcrumbSection from "./components/contact_bread";
import ContactFormSection from "./components/contact_form";

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Contact(){
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
    
    return (
        <>
            <ContactBreadcrumbSection/>
            <ContactFormSection/>
        </>
    )
}

export default Contact;