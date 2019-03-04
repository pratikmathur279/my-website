import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import ContactPageContainer from '../../components/Contact/ContactPageContainer';

class ContactPageBuilder extends Component {
    constructor(props){
        super(props);

        this.state = {
            formControls: {
                email: {
                  value: ''
                },
                name: {
                  value: ''
                },
                subject: {
                    value: ''
                },
                message: {
                  value: ''
                }
            },
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.valid = this.valid.bind(this);
    }

    onClick() {
        if(this.valid()){
            let state = Object.assign({}, this.state);
            let emailObject = {
                name: state.formControls.name.value,
                email: state.formControls.email.value,
                subject: state.formControls.subject.value,
                message: state.formControls.message.value
            }
            console.log(emailObject);
            window.open(`mailto:pratikmathur279@gmail.com?subject=${emailObject.subject}&body=${emailObject.message}`);
        }
        else{
            console.log("Error");
        }
    }

    onChange(e){
        const name = e.target.name;
        const value = e.target.value;
        
        let state = Object.assign({}, this.state);
        state.formControls[name].value = value;
        this.setState(state);
    }

    valid(){
        let state = Object.assign({}, this.state);
        state.errors = {length: 0};
        
        if(state.formControls.name.value === ''){
            state.errors.name = "Please enter a name.";
            state.errors.length += 1;
        }

        if(state.formControls.email.value === ""){
            state.errors.email = "Please enter an email.";
            state.errors.length += 1;
        }

        if(state.formControls.subject.value === ""){
            state.errors.subject = "Please enter a subject.";
            state.errors.length += 1;
        }

        if(state.formControls.message.value === ""){
            state.errors.message = "Please enter a message.";
            state.errors.length += 1;
        }

        this.setState(state);
        return state.errors.length === 0;
    }

    render () {
        return (
            <Auxiliary>
                <div>
                    <ContactPageContainer errors={this.state.errors} formControls={this.state.formControls} onChange={this.onChange} onClick={this.onClick} />
                </div>
            </Auxiliary>
        );
    }
}

export default ContactPageBuilder;