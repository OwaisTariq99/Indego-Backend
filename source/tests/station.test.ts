import controller from '../controllers/station';
import mongoose from 'mongoose';
import Station from '../models/station';
// import chai from 'chai';
// chai.use(require('chai-fs'));
// import sinon from 'sinon';
// const expect = require('chai').expect
import fetch from 'node-fetch';
// import verifyToken from '../services/verifyToken';

// describe('station insertion unit test case',  () => {
//     it('should return error from user station',async function (done) {
//         let Obj = {};
//         let data = await controller.createStation(Obj)
//             .then((res: any) => {
//                 // never called
//             })
//             .catch((error: any) => {
//                 expect(error).to.be.not.equal(undefined);
//                 expect(error).to.be.equal(true);
//                 done();
//             });
//     });
    // it('should return user from station save', function (done) {
    //     let Obj = {};
    //     controller.createStation(Obj)
    //         .then((res: any) => {
    //             expect(res).to.be.not.equal(undefined);
    //             expect(res).to.be.not.equal(null);
    //             expect(res.Obj).to.be.an('object');
    //             done();
    //         })
    //         .catch((error: any) => {
    //             // never called
    //         });
    // });
// });



// describe("test add function", () => {
//   test('it should save object in database', async (done) => {
//     let obj = {
//     data : "abcd"
//     }
//     return controller.createStation(obj).then(data => {
//     expect(data).toBe(obj);
//     expect(data).toBeNull();
//     expect(data).not.toBeUndefined();
//   });
    // fetch('https://www.rideindego.com/stations/json/')
    //   .then((res) => res.json())
    //   .catch(function (error) {
    //       return error
    //   })
    //   .then(async function (response) {
    //       let createStation = await controller.createStation(response)
          // expect(createStation).toBe(Object);
          // expect(createStation).toBeNull();
          // expect(createStation).not.toBeUndefined();
    //   });
    // function callback(data:any) {
    // try {
    //   expect(data).toBe(Object);
    //   expect(data).toBeNull();
    //   expect(data).not.toBeUndefined();
    //   done();
    // } catch (error) {
    //   done();
    //   }
    // }
    // let obj = {
    // data : "abcd"
    // }
    // let createStation = await controller.createStation(obj)
    // createStation(callback);
  //   try{
  //     let obj = {
  //     data : "abcd"
  //     }
  //     let createStation = await controller.createStation(obj)
  //     expect(obj).toBe(obj);
      // expect(createStation).toBeNull();
      // expect(createStation).not.toBeUndefined();
  //     done()
  //   }
  //   catch (error) {
  //     done()
  //   }
//   });
// });

describe("test add function", () => {
  test('it should verify token', () => {
      // let req ={
      //   parm : {
      //     headers : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWJiOWVhZjU3YmRiNjAwMTA5NjEzNjYiLCJpYXQiOjE2MTQ4ODA0MTl9.D3EVqPxWoL3BN6sAqRmMGhbJj1oPDzpYHESUqpSeBHo"
      //   }
      // } 
      // verifyToken(req,res)
  });
});

test('adding an object', async () => {
  let obj = {
    data : "abcd"
  }
   const station = new Station({
                _id: new mongoose.Types.ObjectId(),
                data: obj
            });
      await station.save();
      expect(station).toBeNull();
      expect(station).not.toBeUndefined();
      // let req ={
      //   parm : {
      //     headers : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWJiOWVhZjU3YmRiNjAwMTA5NjEzNjYiLCJpYXQiOjE2MTQ4ODA0MTl9.D3EVqPxWoL3BN6sAqRmMGhbJj1oPDzpYHESUqpSeBHo"
      //   }
      // } 
      // verifyToken(req,res)
  });

// describe("test add function", () => {
//   it("should return 15 for add(10,5)", () => {
//     expect(getWeatherAndStationData(10, 5)).toBe(15);
//   });
// it("should return 5 for add(2,3)", () => {
//     expect(getWeatherAndStationData(2, 3)).toBe(5);
//   });
// });

// describe("test add function", () => {
//   it("should return 15 for add(10,5)", () => {
//     expect(createStation(10, 5)).toBe(15);
//   });
// it("should return 5 for add(2,3)", () => {
//     expect(createStation(2, 3)).toBe(5);
//   });
// });