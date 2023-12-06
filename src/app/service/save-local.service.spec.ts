import { TestBed } from '@angular/core/testing';

import { SaveLocalService } from './save-local.service';

describe('SaveLocalService', () => {
  let service: SaveLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
