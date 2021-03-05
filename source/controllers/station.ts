import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Station from '../models/station';
import fetch from 'node-fetch';
import config from '../config/config';

const createStation = (req: Request, res: Response, next: NextFunction) => {
    // let { author, title } = req.body;

    fetch('https://www.rideindego.com/stations/json/')
    .then(res => res.json())
      .catch(function(error){
        return res.status(400).json({
          status: 400,
          data: null,
          error: error.message,
        });
      })
      .then(function(response){
        const station = new Station({
          _id: new mongoose.Types.ObjectId(),
          data: response
        });
        
        return station
          .save()
          .then((result) => {
            return res.status(200).json({
            status: 200,
            data: result,
            error: null,
            });
          })
          .catch((error) => {
            return res.status(500).json({
            status: 500,
            data: null,
            error: error.message,
            });
          });
      });
};

// const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
//     Book.find()
//         .exec()
//         .then((books) => {
//             return res.status(200).json({
//                 books: books,
//                 count: books.length
//             });
//         })
//         .catch((error) => {
//             return res.status(500).json({
//                 message: error.message,
//                 error
//             });
//         });
// };


const getWeatherAndStationData = (req: Request, res: Response, next: NextFunction) => {
    // Book.find()
    //     .exec()
    //     .then((books) => {
    //         return res.status(200).json({
    //             books: books,
    //             count: books.length
    //         });
    //     })
    //     .catch((error) => {
    //         return res.status(500).json({
    //             message: error.message,
    //             error
    //         });
    //     });

  fetch('https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid='+config.auth.API_KEY)
    .then(res => res.json())
    .catch(function(error){
        return res.status(400).json({
          status: 400,
          data: null,
          error: error.message,
        });
      })
    .then(function(response){
      Station.findOne({$or:[{"createdAt":req.params.at},{"createdAt":{$gt:req.params.at}}]}).exec()
      .then((stations) => {
        let obj={
          at: req.params.at,
          stations: stations,
          weather: response,
        }
          return res.status(200).json({
            obj: obj
        });
      })
      .catch((error)=>{
          return res.status(500).json({
            message: null,
            error: error.message
        });
      })
    });

};


const getWeatherAndStationDataByKioskId = (req: Request, res: Response, next: NextFunction) => {
  try{
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid='+config.auth.API_KEY)
    .then(res => res.json())
    .catch(function(error){
        return res.status(400).json({
          status: 400,
          data: null,
          error: error.message,
        });
      })
    .then(function(response){
      Station.findOne({$or:[{"createdAt":req.params.at},{"createdAt":{$gt:req.params.at}}]}).exec()
      .then((stations) => {
        let obj = {};
        let check = 0;
        for(let i=0;i<stations?.data.features.length;i++){
          if(stations?.data.features[i].properties.kioskId == req.params.kioskId){
            obj={
              at: req.params.at,
              station: stations?.data.features[i],
              weather: response,
            }
            check = 1;
            break;
          }
        }
        if(check == 1){
           return res.status(200).json({
            obj: obj
        });
        }
        else{
          return res.status(404).json({
            message: null,
            error: "Cannot find data"
        });
        }
      })
      .catch((error)=>{
          return res.status(500).json({
            message: null,
            error: error.message
        });
      })
    })
    .catch((error)=>{
          return res.status(500).json({
            message: null,
            error: error.message
        });
      })
    }
    catch(err) {
      return res.status(500).json({
            message: null,
            error: err.message
    })
  }
  

};


export default { createStation, getWeatherAndStationData, getWeatherAndStationDataByKioskId };
