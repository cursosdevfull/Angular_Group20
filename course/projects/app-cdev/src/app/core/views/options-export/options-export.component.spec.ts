import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsExportComponent } from './options-export.component';

describe('OptionsExportComponent', () => {
  let component: OptionsExportComponent;
  let fixture: ComponentFixture<OptionsExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsExportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
