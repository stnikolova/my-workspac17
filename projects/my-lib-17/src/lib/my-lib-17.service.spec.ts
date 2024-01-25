import { TestBed } from '@angular/core/testing';

import { MyLib17Service } from './my-lib-17.service';

describe('MyLib17Service', () => {
  let service: MyLib17Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLib17Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
