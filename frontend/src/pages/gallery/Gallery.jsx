import GalleryContent from "./components/galleryContent";
import GalleryBread from "./components/gallery_bread";
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Gallery() {

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
        <div className="App">
            <GalleryBread />
            <GalleryContent />
        </div>
    );
}

export default Gallery;
