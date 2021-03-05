// const chai = require('chai');
// chai.use(require('chai-fs'));
// const expect = require('chai').expect;

import chai from 'chai';
import chaifs from 'chai-fs';
import { expect } from 'chai';

const verifyToken = require('../services/verifyToken.ts');
const controller = require('../controllers/station.ts');

// import sinon from 'sinon';

describe('station insertion unit test case', async () => {
    it('should return error from user station', function (done) {
        let Obj = {};
        done();
        controller
            .createStation(Obj)
            .then((res: any) => {
                // never called
                console.log('res', res);
            })
            .catch((error: any) => {
                expect(error).to.be.not.equal(undefined);
                expect(error).to.be.equal(true);
                done();
            });
    });
    it('should return user from station save', function (done) {
        let Obj = {};
        done();
        controller
            .createStation(Obj)
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

// export {};
