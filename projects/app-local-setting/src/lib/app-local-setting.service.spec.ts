import { TestBed } from '@angular/core/testing';

import { AppLocalSettingService } from './app-local-setting.service';

describe('AppLocalSettingService', () => {
  let service: AppLocalSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppLocalSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
