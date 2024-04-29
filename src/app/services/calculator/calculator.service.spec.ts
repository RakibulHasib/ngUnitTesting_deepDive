import { LoggerService } from "../logger/logger.service";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService', () => {
  let calculatorService: any;
  let mockLoggerService: any;
  
  beforeEach(() => {
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calculatorService = new CalculatorService(mockLoggerService);
  })

  it('should add two numbers', () => {
    let result = calculatorService.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    let result = calculatorService.subtract(2, 2);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  // let calculatorService: any;
  // let loggerService: any;
  // beforeEach(() => {
  //   loggerService = new LoggerService();
  //   calculatorService = new CalculatorService(loggerService);
  // })

  // it("Pending state", () => {
  //   pending();
  // })

  // it('should add two numbers', () => {
  //   spyOn(loggerService, 'log').and.callThrough();
  //   let result = calculatorService.add(2, 2);
  //   expect(result).toBe(4);
  //   expect(loggerService.log).toHaveBeenCalledTimes(1);
  // });

  // it('should subtract two numbers', () => {
  //   spyOn(loggerService, 'log')
  //   let result = calculatorService.subtract(2, 2);
  //   expect(result).toBe(0);
  //   expect(loggerService.log).toHaveBeenCalledTimes(1);
  // });
  
})