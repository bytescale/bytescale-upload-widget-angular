import { TestBed } from '@angular/core/testing';

import { AngularUploaderService } from './angular-uploader.service';

describe('AngularUploaderService', () => {
  let service: AngularUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
