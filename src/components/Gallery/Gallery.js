import React, {Component} from 'react'

const flickrImages = [
    "http://ggodai.cafe24.com/cat.jpg"
];

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            images: flickrImages,
            selectedImage: flickrImages[0]
        }
    }
    render() {
        const {images, selectedImage} = this.state;
        return (
            <div className="image-gallery">
                <div className="gallery-image">
                    <div>
                        <img src={selectedImage} alt="cat"/>
                    </div>
                </div>
                <div className="image-scroller">
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Gallery;