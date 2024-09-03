import { TestBed } from '@angular/core/testing';

import { FreetogameService } from './freetogame.service';

describe('FreetogameService', () => {
  let service: FreetogameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreetogameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
