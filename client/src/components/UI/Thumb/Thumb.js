import React from 'react';
import classes from './Thumb.scss';

const thumb = (props) => {
    return (
        <div className={classes.gallery__thumb}>
            {props.image.url ? <img alt={props.image.alt} src={props.image.url}/> : null}
        </div>
    );
};

export default thumb;