import React from "react";
import GalleryContent from "./components/galleryContent";
import GalleryBread from "./components/gallery_bread";

function Gallery() {
    return (
        <div className="App">
            <GalleryBread />
            <GalleryContent />
        </div>
    );
}

export default Gallery;
