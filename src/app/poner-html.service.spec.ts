import { TestBed } from '@angular/core/testing';

import { PonerHtmlService } from './poner-html.service';

describe('PonerHtmlService', () => {
  let service: PonerHtmlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PonerHtmlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
