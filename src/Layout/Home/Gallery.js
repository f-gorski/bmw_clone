const Gallery = () => {
    return (
        <section id="gallery" className="gallery">
            <div className="gallery__photo-item">
                <img className="gallery__photo" 
                src={require('../../assets/gallery_1.png').default} 
                srcSet={require('../../assets/gallery_1@2x.png') + '2x'} alt="bmw photo" />
            </div>
            <div className="gallery__photo-item">
                <img className="gallery__photo" 
                src={require('../../assets/gallery_2.png').default} 
                srcSet={require('../../assets/gallery_2@2x.png') + '2x'} alt="bmw photo " />
            </div>
            <div className="gallery__photo-item">
                <img className="gallery__photo" 
                src={require('../../assets/gallery_3.png').default} 
                srcSet={require('../../assets/gallery_3@2x.png') + '2x'} alt="bmw photo " />
            </div>
            <div className="gallery__photo-item">
                <img className="gallery__photo" 
                src={require('../../assets/gallery_4.png').default} 
                srcSet={require('../../assets/gallery_4@2x.png') + '2x'} alt="bmw photo " />
            </div>
            <div className="gallery__photo-item">
                <img className="gallery__photo" 
                src={require('../../assets/gallery_5.png').default} 
                srcSet={require('../../assets/gallery_5@2x.png') + '2x'} alt="bmw photo " /></div>
        </section>
    )
}

export default Gallery;