import { TestBed } from '@angular/core/testing';

import { ApiMonstrinhosService } from './api-monstrinhos.service';

describe('ApiMonstrinhosService', () => {
  let service: ApiMonstrinhosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMonstrinhosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
