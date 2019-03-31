import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';

describe('ProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });
});import { Profile.Service } from './profile.service';

describe('Profile.Service', () => {
  it('should create an instance', () => {
    expect(new Profile.Service()).toBeTruthy();
  });
});
