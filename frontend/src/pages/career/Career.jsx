import CareerBreadcrumbSection from "./components/career_bread";
import CareerHeroSection from "./components/career_hero";
import CareerApplySection from "./components/career_contact";
import CareerBenefit from "./components/career_benefit";
import CareerJobOpenings from "./components/career_jobs";
import BenefitsSection from "./components/career_section";
import CareerCrousal from "./components/career_crousal";

import '../../assets/css/career_style.css'
import { FaCertificate } from "react-icons/fa";

function Career(){
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