import { request, response } from 'express';
import controller from '../controllers/station';
import { NextFunction, Request, Response } from 'express';

describe("test add function", () => {
  test('it should fetch the data and save it in database', () => {
    console.log("here")
  });
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