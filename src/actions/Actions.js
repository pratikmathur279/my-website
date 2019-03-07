
import axios from 'axios';

class Actions {
    getSkills(skills, callback){
        axios('https://pazqa0glua.execute-api.us-east-1.amazonaws.com/dev/skills',{
              crossDomain: true
        })
          .then((res)=>{
              var data = (res.data);
            //   console.log(data);
              callback(data);
          });
    }

    sendContact(contact, callback){
        console.log(contact);
        axios.post('https://pazqa0glua.execute-api.us-east-1.amazonaws.com/dev/contact', contact, { crossDomain: true})
        .then((res, err) => {
            if(!err){
                console.log("data saved!");
                callback(true);
            }
            
        })
    }

    getExperience(experience, callback){
        axios('https://pazqa0glua.execute-api.us-east-1.amazonaws.com/dev/experience', {
            crossDomain: true
        })
        .then((res) => {
            var data = res.data;
            // console.log(data);
            for(var i in data){
                var temp = data[i].responsibilities;
                temp = temp.split(";");
                data[i].responsibilities = temp;
                // console.log(data.length);
                if(i == data.length-1){
                    data.sort((a, b) => (a.index > b.index) ? 1 : -1);
                    callback(data);
                }
            }           
        })
    }

    getProjects(experience, callback){
        axios('https://pazqa0glua.execute-api.us-east-1.amazonaws.com/dev/projects', {
            crossDomain: true
        })
        .then((res) => {
            var data = res.data;
            // console.log(data);
            data.sort((a, b) => (a.index > b.index) ? 1 : -1);
            callback(data);
        })
    }
}

export default Actions;