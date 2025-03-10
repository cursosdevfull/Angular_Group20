import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsBasicComponent } from './signals-basic.component';

describe('SignalsBasicComponent', () => {
  let component: SignalsBasicComponent;
  let fixture: ComponentFixture<SignalsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
