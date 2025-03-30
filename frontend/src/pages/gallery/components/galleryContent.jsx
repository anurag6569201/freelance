import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [images, setImages] = useState({ corporate: [], social: [], event: [], exhibition: [] });
    const [activeFilter, setActiveFilter] = useState('all');
    const API_URL = process.env.REACT_APP_API_URL;
    useEffect(() => {
        axios.get(`${API_URL}/api/gallery/?filter=${activeFilter}`)
            .then(response => {
                console.log("API Response:", response.data); // Debugging

                let formattedImages = { corporate: [], social: [], event: [], exhibition: [] };

                Object.keys(response.data).forEach(key => {
                    const category = key.replace('_images', ''); // Convert "social_images" → "social"
                    if (formattedImages[category] !== undefined) {
                        formattedImages[category] = response.data[key] || [];
                    }
                });

                setImages(formattedImages);
            })
            .catch(error => console.error('Error fetching gallery images:', error));
    }, [activeFilter]);

    return (
        <section className="event-gallery-section sec-ptb-100 clearfix" style={{ boxShadow: '0 0 50px 70px #f7f7f7', position: 'relative' }}>
            <div className="container">
                {/* Filter Buttons */}
                <div className="button-group filters-button-group mb-30">
                    {['all', 'corporate', 'social', 'event', 'exhibition'].map(filter => (
                        <button 
                            key={filter} 
                            className={activeFilter === filter ? 'button is-checked' : 'button'} 
                            onClick={() => setActiveFilter(filter)}
                        >
                            <strong>{filter.charAt(0).toUpperCase() + filter.slice(1)}</strong> Gallery
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid zoom-gallery clearfix mb-80">
                    {['corporate', 'social', 'event', 'exhibition'].map(category => (
                        (activeFilter === 'all' || activeFilter === category) &&
                        images[category]?.map(image => (
                            <div key={image.id} className={`grid-item photo-gallery ${category}-gallery`} data-category={`${category}-gallery`}>
                                <a className="popup-link" href={image.image}>
                                    <img src={`${API_URL}${image.image}`} alt={`${category} Image`} />
                                </a>
                            </div>
                        ))
                    ))}

                    {/* No Photos Available */}
                    {Object.values(images).flat().length === 0 && (
                        <p className="no-photos">No photos available</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
