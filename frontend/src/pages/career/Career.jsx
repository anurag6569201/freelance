import CareerBreadcrumbSection from "./components/career_bread";
import CareerHeroSection from "./components/career_hero";
import CareerApplySection from "./components/career_contact";
import CareerBenefit from "./components/career_benefit";
import CareerJobOpenings from "./components/career_jobs";
import BenefitsSection from "./components/career_section";
import CareerCrousal from "./components/career_crousal";

import '../../assets/css/career_style.css'
import { FaCertificate } from "react-icons/fa";

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Career(){
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
            <CareerBreadcrumbSection/>
            <CareerHeroSection/>
            <CareerBenefit/>
            <BenefitsSection/>
            <CareerApplySection/>
            <CareerCrousal/>
        </>
    )
}
export default Career;