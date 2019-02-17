import React from 'react';
import PropTypes from 'prop-types';

import classes from './Projects.css';
import Project from '../Projects/Project/Project';
import project1 from '../../../assets/Images/project-1.jpg';
import project2 from '../../../assets/Images/project-2.jpg';
import project3 from '../../../assets/Images/project-3.jpg';

const projects = () => (
    <div className={classes.Projects}>
        <div className={classes.ProjectDiv}>
            <div className={classes.ProjectsContainer}>
                <Project src={project1} alt="Project 1"></Project>
                <Project src={project2} alt="Project 2"></Project>
                <Project src={project3} alt="Project 3"></Project>
            </div>
        </div>
    </div>

);

projects.propTypes = {
    type: PropTypes.string.isRequired
};

export default projects;