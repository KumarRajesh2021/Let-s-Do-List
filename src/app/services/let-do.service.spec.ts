import { TestBed } from '@angular/core/testing';

import { LetDoService } from './let-do.service';

describe('LetDoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LetDoService = TestBed.get(LetDoService);
    expect(service).toBeTruthy();
  });
});
