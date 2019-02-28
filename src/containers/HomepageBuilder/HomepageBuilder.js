import React, { Component } from 'react';
import axios from 'axios';

import Auxiliary from '../../hoc/Auxiliary';
import Homepage from '../../components/Homepage/Homepage';
import project1 from '../../assets/Images/Embr.png';
import project2 from '../../assets/Images/totalmortgage_website.png';
import project3 from '../../assets/Images/burger-builder.png';
import pratik from '../../assets/Images/pratik.jpg';

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
          skills: [],
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
          axios('/skills')
          .then((res)=>{
              var data = (res.data);
              console.log(data);
              state.skills = data;
              this.setState(state);
          })

          this.setState(state);
      }

    //   componentDidMount(){
    //     let state = Object.assign({}, this.state);
    //     axios('/skills')
    //       .then((res)=>{
    //           var data = (res.data);
    //           console.log(data);
    //           state.skills = data;
    //           this.setState(state);
    //       })

    //   }

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