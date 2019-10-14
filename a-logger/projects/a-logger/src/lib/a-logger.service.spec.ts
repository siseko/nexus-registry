import { TestBed } from '@angular/core/testing';

import { ALoggerService } from './a-logger.service';

describe('ALoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ALoggerService = TestBed.get(ALoggerService);
    expect(service).toBeTruthy();
  });
});
