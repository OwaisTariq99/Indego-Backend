import schedule from "node-schedule";
import fetch from 'node-fetch';
import mongoose from 'mongoose';
import Station from '../models/station';


const scheduler = async  () => {
    let task = schedule.scheduleJob('* 1 * * *', function () {
    fetch('https://www.rideindego.com/stations/json/')
    .then(res => res.json())
      .catch(function(error){
        console.log(error.message);
      })
      .then(function(response){
        const station = new Station({
          _id: new mongoose.Types.ObjectId(),
          data: response
        });
        
        return station
          .save()
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
    // console.log('task-->',task)
    // fetch('http://localhost:4000/api/stations')
    // .then(res => console.log("res---->",res))
});
};

export default scheduler;