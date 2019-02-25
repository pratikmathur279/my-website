import React from 'react';
import classes from './ProjectInformation.css';

const ProjectInformation = ( props ) => (
    <div className={classes.ProjectInformation}>
        <img id={props.card.index}
            src={props.card.url}
            alt={props.card.name}></img>
        <div className={classes.projectBody}>
            <h2>{props.card.name}</h2>
            <p>{props.card.description}</p>
        </div>
        
    </div>
);

export default ProjectInformation;