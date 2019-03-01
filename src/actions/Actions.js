
import axios from 'axios';

class Actions {
    getSkills(skills, callback){
        axios('https://pazqa0glua.execute-api.us-east-1.amazonaws.com/dev/skills')
          .then((res)=>{
              var data = (res.data);
              console.log(data);
              callback(data);
          });
    }

    getExperience(experience, callback){
        axios('https://pazqa0glua.execute-api.us-east-1.amazonaws.com/dev/experience')
        .then((res) => {
            var data = res.data;
            console.log(data);
            for(var i in data){
                var temp = data[i].responsibilities;
                temp = temp.split(";");
                data[i].responsibilities = temp;
                console.log(data.length);
                if(i == data.length-1){
                    callback(data);
                }
            }           
        })
    }

    getProjects(experience, callback){
        axios('https://pazqa0glua.execute-api.us-east-1.amazonaws.com/dev/projects')
        .then((res) => {
            var data = res.data;
            console.log(data);
            data.sort((a, b) => (a.index > b.index) ? 1 : -1);
            callback(data);
        })
    }
}

export default Actions;