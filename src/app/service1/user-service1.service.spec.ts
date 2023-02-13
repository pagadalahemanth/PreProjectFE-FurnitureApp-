import { TestBed } from '@angular/core/testing';

import { UserService1Service } from './user-service1.service';

describe('UserService1Service', () => {
  let service: UserService1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
