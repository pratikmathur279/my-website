import React from 'react';

import classes from './Project.css';

const project = ( props ) => (
    <div className={classes.project}>
        <img 
            src={props.src}
            alt={props.alt}></img>
    </div>
);

export default project;