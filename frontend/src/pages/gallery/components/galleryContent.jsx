import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
    const API_URL = import.meta.env.VITE_API_URL;

    const imageData = {
        corporate: [
            { id: 2, image: 'https://cdn.pixabay.com/photo/2020/04/13/18/37/women-5039680_1280.jpg' },
            { id: 9, image: 'https://cdn.pixabay.com/photo/2017/05/19/12/40/beard-2326422_1280.jpg' },
        ],
        social: [
            { id: 3, image: 'https://cdn.pixabay.com/photo/2016/11/14/04/25/bride-1822587_1280.jpg' },
            { id: 4, image: 'https://cdn.pixabay.com/photo/2016/06/29/08/42/wedding-dress-1486260_1280.jpg' },
            { id: 10, image: 'https://cdn.pixabay.com/photo/2016/06/29/08/41/wedding-dresses-1486256_1280.jpg' },
            { id: 14, image: 'https://cdn.pixabay.com/photo/2019/03/26/02/51/woman-4081760_1280.jpg' },
        ],
        event: [
            { id: 5, image: 'https://cdn.pixabay.com/photo/2019/10/15/03/16/black-and-white-4550471_1280.jpg' },
            { id: 6, image: 'https://cdn.pixabay.com/photo/2022/12/14/13/53/christmas-7655448_1280.jpg' },
            { id: 11, image: 'https://cdn.pixabay.com/photo/2023/01/18/14/39/family-7727035_1280.jpg' },
        ],
        exhibition: [
            { id: 7, image: 'https://cdn.pixabay.com/photo/2015/05/25/14/27/garden-783344_1280.jpg' },
            { id: 8, image: 'https://cdn.pixabay.com/photo/2022/12/25/18/38/xmas-7677696_1280.jpg' },
            { id: 12, image: 'https://cdn.pixabay.com/photo/2016/11/29/12/15/bright-1869419_1280.jpg' },
        ],
    };

    const [images, setImages] = useState(imageData);
    const [activeFilter, setActiveFilter] = useState('all');
    const allImages = Object.values(images).flat();
    const filteredImages = activeFilter === 'all' ? allImages : images[activeFilter] || [];

    return (
        <section className="event-gallery-section sec-ptb-100 clearfix" style={{ boxShadow: '0 0 50px 70px #f7f7f7', position: 'relative' }}>
            <div className="container">
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

                <div className="grid zoom-gallery clearfix mb-80">
                    {filteredImages.map(image => (
                        <div key={image.id} className={`grid-item photo-gallery ${Object.keys(images).find(key => images[key].includes(image))}-gallery`} data-category={`${Object.keys(images).find(key => images[key].includes(image))}-gallery`}>
                            <a className="popup-link" href={image.image}>
                                <img src={image.image} alt={`${Object.keys(images).find(key => images[key].includes(image))} Image`} />
                            </a>
                        </div>
                    ))}

                    {filteredImages.length === 0 && allImages.length > 0 && (
                        <p className="no-photos">No photos available for this category.</p>
                    )}

                    {allImages.length === 0 && (
                        <p className="no-photos">No photos available</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Gallery;