import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    //arrange
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not have any messages at starting', () => {
    //act
    let count = service.messages.length;

    //assert
    expect(count).toBe(0);
  });

  it('should add the messaged when log is called', () => {
    //act
    service.log('message');

    //assert
    expect(service.messages.length).toBe(1);
  })

  it('should clear all the messages when clear is called', () => {
    //act
    service.log('message');
    service.clear();

    //assert
    expect(service.messages.length).toBe(0);

  })
});
