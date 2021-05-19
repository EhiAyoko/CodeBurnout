import { TestBed } from '@angular/core/testing';

import { AuthicationService } from './authication.service';

describe('AuthicationService', () => {
  let service: AuthicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
