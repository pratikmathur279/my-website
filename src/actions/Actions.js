
import axios from 'axios';

class Actions {
    getSkills(skills, callback){
        axios('/skills')
          .then((res)=>{
              var data = (res.data);
              console.log(data);
              callback(data);
          });
    }

    getExperience(experience, callback){
        axios('/experience')
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
}

export default Actions;