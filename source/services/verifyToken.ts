// const jwt = require('jsonwebtoken');
import { NextFunction, Request, Response } from 'express';
import {verify} from 'jsonwebtoken';
import config from '../config/config';

const verifyToken =  async function(req: Request, res: Response, next: NextFunction){
    console.log('Request headers: req.headers.authorization', req.headers.authorization)
    let token =  req.headers.authorization;
    if(!token) return res.status(401).send({ 
        status : 401, 
        data : null, 
        error: 'Not Authorized'})
    try {
        let verified:any = verify(token,config.auth.SECRET_KEY);
        if(verified._id == config.auth.ID){
            next()
        }
        else{
            return res.status(401).send({ 
                status : 401, 
                data : null, 
                error: 'Not Authorized'})
        }

    } catch (error) {
        return res.status(400).send({ 
            status : 400, 
            data : null, 
            error: 'Bad Request'})
    }
}

export default verifyToken;

// module.exports = async function(req: Request, res: Response, next: NextFunction){
//     console.log('Request headers: req.headers.authorization', req.headers.authorization)
//     let token =  req.headers.authorization;
//     if(!token) return res.status(401).send({ 
//         status : 401, 
//         data : null, 
//         error: 'Not Authorized'})
//     try {
//         let verified:any = verify(token,config.auth.SECRET_KEY);
//         if(verified._id == process.env.ID){
//             next()
//         }
//         else{
//             return res.status(401).send({ 
//                 status : 401, 
//                 data : null, 
//                 error: 'Not Authorized'})
//         }

//     } catch (error) {
//         return res.status(400).send({ 
//             status : 400, 
//             data : null, 
//             error: 'Bad Request'})
//     }
// }