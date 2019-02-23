import React from 'react';

import classes from './ProgressBar.css';
import Filler from './Filler/Filler';

const ProgressBar = (props) => {

    const buildProgressBar = (skill) => (
        <div className={classes.ProgressBar}>
            <Filler skill={skill} />
        </div>
    )
    return(
        <div className={classes.ProgressBarContainer}>
            {props.skills.map(buildProgressBar)}
        </div>
    )
}

export default ProgressBar;
