import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const SubCategory = () => {
    const location = useLocation();
    const { id } = useParams();  // Get the clicked service ID from the URL
    const subservices = location.state?.subservices || [];  // Retrieve services from state
    const maintitle = location.state?.maintitle || [];  // Retrieve services from state

    // Scroll to the element with the given ID when the component mounts
    useEffect(() => {
        if (id) {
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100); // Delay slightly to ensure rendering is complete
        }
    }, [id]);

    return (
        <div className="row g-5 py-5 mt-4">
            <div className="container">
            <h2 className="text-uppercase fw-bold mt-4 pt-3 display-5 text-dark px-5">{maintitle}</h2>
                {subservices.map((service, index) => (
                    <div 
                        key={index} 
                        id={`${index}`} 
                        className={`row g-5 mt-2 justify-content-center align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
                    >
                        <div className="col-lg-5">
                            <img
                                src={service.image}
                                alt={service.name}
                                className="img-fluid rounded shadow"
                                style={{
                                    height: '300px',
                                    width: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(0.95)',
                                }}
                            />
                        </div>
                        <div className="col-lg-6">
                            <h3 className="fw-bold">{service.name}</h3>
                            <p className="text-muted">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubCategory;
