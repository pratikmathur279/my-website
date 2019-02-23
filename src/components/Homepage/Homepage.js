import React from 'react';

import classes from './Homepage.css';
import Projects from '../Homepage/Projects/Projects';
import HomePageContainer from '../Homepage/HomepageContainer/HomepageContainer';
import ProgressBar from '../UI/ProgressBar/ProgressBar';

const Homepage = (props) => {
    
    return(
        <div className={classes.Homepage}>
            <div className={classes.HomePageContainer}>
                <HomePageContainer/>
            </div>
            {/* <p>Click on the images to view details.</p> */}
            <div className={classes.ProgressBarContainer}>
                <ProgressBar skills={props.skills} />
            </div>
            {/*THIS IS FOR PROJECTS */}
            {/* <div className={classes.Projects}>
                <Projects projects={props.projects} isFlipped={props.isFlipped} mouseClick={props.mouseClick} />
            </div> */}
        </div>
    )
}

export default Homepage;