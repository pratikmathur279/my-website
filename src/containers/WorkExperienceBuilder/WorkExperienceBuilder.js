import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import WorkExperience from '../../components/WorkExperience/WorkExperience';

import Actions from '../../actions/Actions';

class WorkExperienceBuilder extends Component {
    constructor() {
        super();
        this.state = {
            experience: []
        };

        this.actions = new Actions();
      }

      componentWillMount(){
        let state = Object.assign({}, this.state);
        
        var temp = this.actions.getExperience(state.experience, (data)=> {
          state.experience = data;
          this.setState(state);
        });   
    }

    render () {
        return (
            <Auxiliary>
                <WorkExperience experience={this.state.experience} />
            </Auxiliary>
        );
    }
}

export default WorkExperienceBuilder;