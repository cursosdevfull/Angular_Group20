import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAssessmentsComponent } from './form-assessments.component';

describe('FormAssessmentsComponent', () => {
  let component: FormAssessmentsComponent;
  let fixture: ComponentFixture<FormAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAssessmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
