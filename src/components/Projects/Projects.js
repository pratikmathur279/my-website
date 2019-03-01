import React from 'react';
import ProjectRow from './ProjectRow';

const Projects= (props) => {

    return(
        <div>
        {props.split.map((row, i)=> {
            return(
                <ProjectRow 
                    row={i}
                    projects={row}
                    openModalHandler = {props.openModalHandler}
                />
            )
        })}
        </div>
    )
}

export default Projects