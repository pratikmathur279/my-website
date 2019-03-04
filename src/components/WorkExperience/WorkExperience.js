import React from 'react';

import classes from './WorkExperience.css';
import Experience from './Experience/Experience';

const WorkExperience = (props) => {
    
    const buildRow = (exp) => {
        // console.log(card);
        return (
            <div key={exp.id} className={classes.experience} >
                <Experience data={exp} />
            </div>
        );
    }

    return (
        <div className={classes.WorkExperience}>
            <div className={classes.Header}>
                <h1>Professional Experience</h1>
            </div>
            <div className={classes.WorkExperienceRow}>
                {props.experience.map(buildRow)}
            </div>
        </div>
    )
}

export default WorkExperience;