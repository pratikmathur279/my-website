import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Homepage from '../../components/Homepage/Homepage';
import project1 from '../../assets/Images/Embr.png';
import project2 from '../../assets/Images/totalmortgage_website.png';
import project3 from '../../assets/Images/burger-builder.png';
import pratik from '../../assets/Images/pratik.jpg';

import Carousel1 from '../../components/UI/Carousel/Carousel';

class HomepageBuilder extends Component {
    constructor() {
        super();
        this.state = {
          isFlipped: false,
          image: pratik,
          name: 'Pratik Mathur',
          hexagons: [
              {name: 'speedometer', title: 'Fast', desc: 'Fast load times and lag free interaction'}, {name: 'laptop', title: 'Responsive', desc: 'My layouts will work on any device.'}, {name: 'lightbulb', title: 'Intuitive', desc: 'Strong preference for easy to use, intuitive UX/UI.'}, {name: 'flight', title: 'Dynamic', desc: 'I love making dynamic websites'}
            ],
          skills: [
              {name: "React", percentage: 70}, {name : "Angular", percentage: 60}, {name: "Javascript", percentage: 85}, {name: "NodeJS", percentage: 40}, {name: "PHP Laravel", percentage: 60}, {name: "UI Design", percentage: 70}, {name: "HTML5", percentage: 90}, {name: "CSS3", percentage: 70}
          ],
          projects: 
              [
                    {name: "Embr", url: project1, description: "This project was developed using ReactJS, PHP Laravel framework and hosted on Ubuntu 16.04.", heading: "Embr - Marketing Portal", isFlipped: false, index:0},
                    {name: "TMS-website", url: project2, description: "This project was developed using ReactJS, PHP Laravel framework and hosted on Ubuntu 16.04. It uses the flexiauth library to register and manage users.", heading: "Total Mortgage Services, LLC", isFlipped: false, index:1},
                    {name: "burger", url: project3, description: "This project was developed using ReactJS, NodeJS and MongoDB database. It was hosted using the AWS Lambda, AWS API Gateway and Serverless framework.", heading: "Burger Builder", isFlipped: false, index:2}
                ],
        description: {
            description1: "Click on the images to view details"
        }
        };
        this.handleClick = this.handleClick.bind(this);
      }

      componentWillMount(){
          let state = Object.assign({}, this.state);
          let split = this.createRows(state.hexagons);
          state.hexagons = split;
          this.setState(state);
      }

      handleClick(e) {
        // e.preventDefault();
        console.log("clicked "+e.target.id );
        var temp = this.state.projects;
        for(var i in temp){
            if(temp[i].index == e.target.id){
                temp[i].isFlipped = !temp[i].isFlipped;

                this.setState({projects: temp});
                // this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
            }
        }
      }

      createRows(original){
        var arr = [];
        while(original.length > 0){
            var split = original.splice(0,2);
            arr.push(split);
        }
        return arr;
      }

    render () {
        console.log(this.state.hexagons);
        return (
            <Auxiliary>
                <Homepage image={this.state.image} alt={this.state.name} hexagons={this.state.hexagons} skills={this.state.skills} projects={this.state.projects} mouseClick={this.handleClick.bind(this)} isFlipped={this.state.isFlipped} />
            </Auxiliary>
        );
    }
}

export default HomepageBuilder;