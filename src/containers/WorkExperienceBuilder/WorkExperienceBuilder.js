import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import WorkExperience from '../../components/WorkExperience/WorkExperience';

class WorkExperienceBuilder extends Component {
    constructor() {
        super();
        this.state = {
            experience: [
                {id: 0, name: "Total Mortgage Services, LLC", position: "Web Developer", from: "July 2018", to: "present", environment: 'HTML, CSS, JavaScript, AJAX, React JS, React Flux, PHP Laravel, NodeJS, Express.js, Salesforce Apex, Microsoft Bot Framework, Microsoft Azure, Microsoft Teams, Slack', responsibilities: ['Developed an internal ticketing platform, called Embr, using React.js, PHP Laravel and SASS, to manage the internal development and marketing requests and provide the employees with marketing material such as Business cards, flyers, postcards, social ads, etc. customizable as per the user.', 'Developed a Realtor marketing platform to provide insights of the company’s products to the new realtors. Developed the application using React.js, PHP Laravel, SQL server.', 'Develop and maintain the company website using HTML5, CSS3 and Javascript.', 'Developed a Chatbot for Microsoft Teams and Slack using NodeJS, Express.js and integrated with Salesforce platform, where Loan Officers can claim new realtor leads. Integrated the chatbot with NLP technology to parse the user responses and send messages proactively', 'Developed applications using Nodejs, Express.js and Oauth 2.0 to retrieve the Insights for the Facebook Ad Campaigns; retrieve the loans started on Blend platform; retrieve the reviews posted for the Loan Officers on Zillow.']},
                {id: 1, name: "Inbiz Concepts Inc",  client: 'Findability Sciences', position: "Software Developer", from: "Feb 2018", to: "July 2018", environment: 'AngularJS, HTML5, Javascript, MySQL, MongoDB, IBM Watson Assistant, IBM Watson Tone Analyzer, NodeJS, ExpressJS, Keen.io cloud API', responsibilities: ['Designed and developed the User Interface of a chatbot using AngularJS to provide an efficient human-like interaction with the customer to assist on various GSK services and GE products.', 'Integrated the Chatbot with the IBM Tone Analyzer to analyze the customer sentiment and assist accordingly', 'Developed a NodeJS application to integrate the Chatbot with a MySQL and MongoDB database to provide real-time inventory management and maximize the productivity of the Chatbot application.', 'Developed REST Web Services to handle the HTTP requests from the Chatbot and exchange data between the Chatbot and the server application.']},
                {id: 2, name: "Astute Business Solutions", position: "Software Developer - Intern", from: "June 2016", to: "Aug 2016", environment: 'HTML5, CSS3, JavaScript, AngularJS, Bootstrap, AJAX, JSON, MySQL database, Eclipse IDE', responsibilities: ['Developed an interactive User Interface design for the organization Youth4Jobs.', 'Involved in the development of responsive web pages using HTML5, CSS3, Bootstrap4 and developed a Single Page Application (SPA) using the components of AngularJS.', 'Extensively used Bootstrap 4 to provide design fluidity using flexbox and pagination.','Developed an AJAX-driven web application to improve the user experience of the application and used JSON to asynchronously send and retrieve the data from the server','Worked in the Agile Development process to ensure quality product delivered within the estimated time frame.']},
                {id: 3, name: "Astute Business Solutions", position: "Software Developer - Intern", from: "August 2014", to: "Aug 2015", environment: 'HTML5, CSS3, Bootstrap, AngularJS, AJAX, JSON, JavaScript, NodeJS, Express.js, MongoDB, Ionic, Cordova, Git, Jasmine, Karma, Eclipse IDE', responsibilities: ['Developed a web-based application for Youth4Jobs using MEAN stack and migrated the legacy data to store information on an ERP solutions platform called Open-e-campus.', 'Involved in the development of responsive webpages using HTML5, CSS3, Bootstrap and developed responsive Single Page Applications (SPAs) using the components of AngularJS. ', 'Created the NodeJS server using Express.js, combined with Socket.io to build MVC framework to handle the AJAX calls from the front-end AngularJS framework to the MongoDB database and retrieve the data asynchronously. ']},
                {id: 4, name: "IBM India Pvt. Ltd. ", position: "Software Developer - Intern", from: "January 2014", to: "July 2014", environment: 'HTML, CSS, JavaScript, AJAX, jQuery, Struts, XML, JSON, Servlets, JavaBeans, IBM WebSphere, Mockito', responsibilities: ['Developed an Enterprise Application for Cloud Environment (J2EE) called E-Postal Services using IBM Rational Application Developer and IBM SmartCloud by implementing the Struts MVC framework.', 'Developed the client-side interface using HTML, JavaScript, AJAX and jQuery and utilized Javascript and Struts validation framework to perform front-end validations.', 'Developed RESTful web service to handle XML and JSON requests and implemented the AJAX functionality to asynchronously update webpages by exchanging data with the server.', 'Designed and configured server side using J2EE components such as Servlets, JavaBeans, Action classes and Controllers and displayed the view components by generating JSPs dynamically.']}

            ]
        };
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