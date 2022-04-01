import { TestBed } from '@angular/core/testing';

import { UploaderService } from './uploader.service';

describe('AngularUploaderService', () => {
  let service: UploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
