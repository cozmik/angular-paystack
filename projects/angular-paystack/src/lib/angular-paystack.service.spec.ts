import { TestBed, inject } from '@angular/core/testing';

import { AngularPaystackService } from './angular-paystack.service';
import { PUBLIC_KEY_TOKEN } from './paystack-token';

describe('AngularPaystackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AngularPaystackService,
        { provide: PUBLIC_KEY_TOKEN, useValue: 'public-key' }
      ]
    });
  });

  it('should be created', inject([AngularPaystackService], (service: AngularPaystackService) => {
    expect(service).toBeTruthy();
  }));

  it('should inject tokens', inject([AngularPaystackService], (service: any) => {
    expect(service.token).toEqual('public-key');
  }));
});
