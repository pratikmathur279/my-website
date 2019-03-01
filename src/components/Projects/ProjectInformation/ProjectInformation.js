import React from 'react';
import classes from './ProjectInformation.css';

import Embr from '../../../assets/Images/Embr.png';
import totalmortgage from '../../../assets/Images/totalmortgage_website.png';
import burger from '../../../assets/Images/burger-builder.png';
import teams_chatbot from '../../../assets/Images/teams-chatbot.png';
import backgammon from '../../../assets/Images/backgammon.png';


const ProjectInformation = ( props ) => {

    let url = props.card.url;
    console.log(props.showProject);
    if(props.showProject){
        if(url.includes("embr")){
            url = Embr;
        }
        else if(url.includes('totalmortgage')){
            url = totalmortgage;
        }
        else if(url.includes('burger')){
            url = burger;
        }
        else if(url.includes('chatbot')){
            url = teams_chatbot;
        }
        else {
            url = backgammon;
        }

    }

    return(
        <div className={classes.ProjectInformation}>
        <img id={props.card.index}
            src={url}
            alt={props.card.name}></img>
        <div className={classes.projectBody}>
            <h2>{props.card.name}</h2>
            <p>{props.card.description}</p>
        </div>
        
    </div>

    )    
}

export default ProjectInformation;