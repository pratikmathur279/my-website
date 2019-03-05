import React from 'react';

import classes from './AboutWebsite.css';
import MaterialIcon from 'material-icons-react';

const AboutWebsite = (props) => {

    return (
        <div className={classes.AboutWebsite}>
            <MaterialIcon icon="settings" size={40} />
        </div>
    )
}

export default AboutWebsite;