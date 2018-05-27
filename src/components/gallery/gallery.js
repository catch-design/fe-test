import React, { Component } from 'react';
import './gallery.scss';
import GalleryService from '../../services/gallery/galleryService';

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
                <div className="gallery__container">
                    {
                        this.state.gallery.map(image=>
                            <img className="gallery__image" key={image.id} src={image.imageUrl} alt={image.title} />
                        )
                    }
                </div>
            </div>
        );
    }
}