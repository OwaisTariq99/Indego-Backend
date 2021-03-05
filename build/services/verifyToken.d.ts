/**
 * Helper function to verify token
 */
import { NextFunction, Request, Response } from 'express';
/**
 * verifyToken - Verify user token from header.
 * @param req - request from parameters
 * @param res - response of the API
 * @param next - proceed to the next function
 * @returns {Promise<void>}
 */
declare const verifyToken: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default verifyToken;
//# sourceMappingURL=verifyToken.d.ts.map