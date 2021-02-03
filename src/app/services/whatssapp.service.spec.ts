import { TestBed } from '@angular/core/testing';

import { WhatssappService } from './whatssapp.service';

describe('WhatssappService', () => {
  let service: WhatssappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatssappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
