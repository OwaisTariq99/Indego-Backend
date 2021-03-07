"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var config_1 = __importDefault(require("../config/config"));
/**
 * verifyToken - Verify user token from header.
 * @param req - request from parameters
 * @param res - response of the API
 * @param next - proceed to the next function
 * @returns {Promise<void>}
 */
var verifyToken = function (token) {
    try {
        var verified = jsonwebtoken_1.verify(token, config_1.default.auth.SECRET_KEY);
        if (verified._id == config_1.default.auth.ID) {
            return {
                status: 200,
                data: verified,
                error: null
            };
        }
        else {
            return {
                status: 401,
                data: null,
                error: "Unauthorized"
            };
        }
    }
    catch (error) {
        return {
            status: 400,
            data: null,
            error: "Bad Request"
        };
    }
};
/**
 * verifyToken - This function will verify 2FA code against user Id.
 * @param token - token that need to verify.
 * @returns {Promise<void>}
 */
// const verifyToken = async (token: string) => {
// return new Promise<object>((resolve, reject) => {
//     verify(token, config.auth.SECRET_KEY, function (err: any, decoded: any) {
//     if (err) {
//         reject(err);
//     } else if (decoded.id) {
//         if(decoded._id == config.auth.ID){
//             resolve(decoded);
//         }
//         else{
//             reject(err);
//         }
//     }
//     });
// });
// }
exports.default = verifyToken;
