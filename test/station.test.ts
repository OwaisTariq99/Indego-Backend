import chai from 'chai';
import chaifs from 'chai-fs';
import { expect } from 'chai';
import fetch from 'node-fetch';
import verifyToken from '../source/services/verifyToken';
import controller from '../source/controllers/station';

chai.use(require('chai-fs'));
chai.use(chaifs);
// import sinon from 'sinon';

describe('station insertion unit test case', async () => {
    it('should return error from user station', function (done) {
        let Obj = {};
        controller.createStation(Obj)
            .then((res: any) => {
                // never called
            })
            .catch((error: any) => {
                expect(error).to.be.not.equal(undefined);
                expect(error).to.be.equal(true);
                done();
            });
    });
    it('should return user from station save', function (done) {
        let Obj = {};
        controller.createStation(Obj)
            .then((res: any) => {
                expect(res).to.be.not.equal(undefined);
                expect(res).to.be.not.equal(null);
                expect(res.Obj).to.be.an('object');
                done();
            })
            .catch((error: any) => {
                // never called
            });
    });
});
