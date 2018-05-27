import React, { Component } from 'react';
import GalleryService from '../../services/gallery/galleryService';
import './gallery.scss';

export default class Gallery extends Component {
    
    constructor() {
        super();

        this.state = {
            gallery: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ gallery: GalleryService.getGallery() }));
    }

    render() {
        return (
            <div className="gallery">
                {
                    this.state.gallery.map(image=>
                        <img className="gallery__image" key={image.id} src={image.imageUrl} alt={image.title} />
                    )
                }
            </div>
        );
    }
}