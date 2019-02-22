import React from 'react';
import classes from './Project.css';

const Project = ( props ) => (
    <div className={classes.project} onClick={props.openModalHandler.bind(null, props.id)}>
        <img id={props.id} 
            src={props.src}
            alt={props.alt}></img>
    </div>
);

export default Project;