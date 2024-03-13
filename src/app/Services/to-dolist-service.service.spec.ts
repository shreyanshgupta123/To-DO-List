import { TestBed } from '@angular/core/testing';

import { ToDolistServiceService } from './to-dolist-service.service';

describe('ToDolistServiceService', () => {
  let service: ToDolistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDolistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
