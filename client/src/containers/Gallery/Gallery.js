import React, {Component} from 'react';
import Thumb from '../../components/UI/Thumb/Thumb';
import classes from './Gallery.scss';

class Gallery extends Component {

    state = {
        galleryItems: [
            {
                title: 'Mountains by the lake',
                image: {
                    url: '/src/assets/images/lake-mountains.png',
                    alt: 'Mountains by the lake'
                }
            },
            {
                title: 'Mountains near a vulcanic lake',
                image: {
                    url: '/src/assets/images/vulcanic-waterfall-mountains.png',
                    alt: 'Mountains near a vulcanic lake'
                }
            },
            {
                title: 'Sunset Sea (might as well be sunrise)',
                image: {
                    url: '/src/assets/images/sunset-sea.png',
                    alt: 'Sunset sea'
                }
            },
            {
                title: 'Sunset Hills',
                image: {
                    url: '/src/assets/images/sunset-hills.png',
                    alt: 'Sunset hills'
                }
            },
        ],
        dragging: false,
        rel: {
            x: 0
        },
        pos: {
            x: 0
        }
    };

    onMouseDown = (e) => {
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);

        this.setState({
            pos:{
                x: e.pageX
            },
            dragging: true});
    };

    onMouseUp = (e) => {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
        this.setState({
            dragging: false});
    };

    onMouseMove = (e) => {
        if (!this.state.dragging) return;
        this.setState({
            rel: {
                x: e.pageX - this.state.pos.x
            },
            pos:{
                x: e.pageX
            }
        });
        this._scroller.scrollLeft  = this._scroller.scrollLeft - this.state.rel.x;
        e.stopPropagation();
        e.preventDefault();
    };

    render() {
        let galleryItems = this.state.galleryItems.length > 0 ? this.state.galleryItems.map((item, index) => {
                return <Thumb
                    key={index}
                    title={item.title}
                    image={item.image}
                />
            }): null;
        return (
            <div className={classes.gallery__scrollcontainer} >
                <div className={classes.gallery__contentcontainer} onMouseDown={this.onMouseDown.bind(this)} ref={(ref) => this._scroller = ref}>
                    {galleryItems}
                </div>
            </div>

        )
    }
};

export default Gallery;