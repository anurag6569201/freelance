import AboutSlider from "./components/aboutSlider";
import ManagementAbout from "./components/management";
import ServiceOffer from "./components/servicesoffer";
import TeamMembers from "./components/TeamMembers";

function AboutPage(){
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