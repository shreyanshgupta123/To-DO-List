import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsFormsComponent } from './contact-details-forms.component';

describe('ContactDetailsFormsComponent', () => {
  let component: ContactDetailsFormsComponent;
  let fixture: ComponentFixture<ContactDetailsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactDetailsFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactDetailsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
