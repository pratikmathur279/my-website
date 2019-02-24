import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import project1 from '../../assets/Images/Embr.png';
import project2 from '../../assets/Images/totalmortgage_website.png';
import project3 from '../../assets/Images/burger-builder.png';
import project4 from '../../assets/Images/teams-chatbot.png';
import ProjectInformation from '../../components/Projects/ProjectInformation/ProjectInformation';

import classes from './ProjectsPageBuilder.css';

import Modal from '../../components/UI/Modal/Modal';

import ProjectRow from '../../components/Projects/ProjectRow';


class ProjectsPageBuilder extends Component {
    constructor() {
        super();
        this.state = {
          isFlipped: false,
          showProject: false,
          selected: {},
          original: [
                {name: "Embr", url: project1, description: "This project was developed using ReactJS, PHP Laravel framework and hosted on Ubuntu 16.04.", heading: "Embr - Marketing Portal", isFlipped: false, index: 0},
                {name: "TMS Website", url: project2, description: "This project was developed using ReactJS, PHP Laravel framework and hosted on Ubuntu 16.04. It uses the flexiauth library to register and manage users.", heading: "Total Mortgage Services, LLC", isFlipped: false, index: 1},
                {name: "Burger Application", url: project3, description: "This project was developed using ReactJS, NodeJS and MongoDB database. It was hosted using the AWS Lambda, AWS API Gateway and Serverless framework.", heading: "Burger Builder", isFlipped: false, index: 2},
                {name: "Chatbot for Microsoft Teams and Slack", url: project4, description: "This project was developed using ReactJS, NodeJS and MongoDB database. It was hosted using the AWS Lambda, AWS API Gateway and Serverless framework.", heading: "Chatbot for Microsoft Teams and Slack", isFlipped: false, index:4}
            ],
          projects: [
                {name: "Embr", url: project1, description: "This project was developed using ReactJS, PHP Laravel framework and hosted on Ubuntu 16.04.", heading: "Embr - Marketing Portal", isFlipped: false, index:0},
                {name: "TMS-website", url: project2, description: "This project was developed using ReactJS, PHP Laravel framework and hosted on Ubuntu 16.04. It uses the flexiauth library to register and manage users.", heading: "Total Mortgage Services, LLC", isFlipped: false, index:1},
                {name: "burger", url: project3, description: "This project was developed using ReactJS, NodeJS and MongoDB database. It was hosted using the AWS Lambda, AWS API Gateway and Serverless framework.", heading: "Burger Builder", isFlipped: false, index:2},
                {name: "Chatbot for Microsoft Teams and Slack", url: project4, description: "This project was developed using ReactJS, NodeJS and MongoDB database. It was hosted using the AWS Lambda, AWS API Gateway and Serverless framework.", heading: "Chatbot for Microsoft Teams and Slack", isFlipped: false, index:4}
            ],
            description: {
                description1: "Click on the images to view details"
            }
        };
        this.createRows = this.createRows.bind(this);
        this.openModalHandler = this.openModalHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
      }

      componentWillMount(){
        let state = Object.assign({}, this.state);  
        let split = this.createRows(state.projects);
          state.split = split;
          this.setState(state);
      }

        openModalHandler(id){
            console.log(id);
            let state = Object.assign({}, this.state);
            var projects = state.original;

            for(var i in projects){
                if(id == projects[i].index){
                    state.selected = projects[i];
                }
            }
            state.showProject = true;
            this.setState(state);
            console.log(state);
        }

        closeModalHandler = () => {
         this.setState({showProject: false});
      }

      createRows(original){
        var arr = [];
        while(original.length > 0){
            var split = original.splice(0,3);
            arr.push(split);
        }
        return arr;
      }
    
    render () {
        return (
            <Auxiliary>
                <h1 className={classes.ProjectsHeader}>Projects</h1>
                <Modal show={this.state.showProject} modalClosed={this.closeModalHandler}>
                    <ProjectInformation card={this.state.selected} />
                </Modal>
                {this.state.split.map((row, i)=> {
                    return(
                        <ProjectRow 
                            row={i}
                            projects={row}
                            openModalHandler = {this.openModalHandler}
                        />
                    )
                })}
            </Auxiliary>
        );
    }
}

export default ProjectsPageBuilder;