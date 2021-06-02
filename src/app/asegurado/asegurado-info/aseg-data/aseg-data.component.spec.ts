import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsegDataComponent } from './aseg-data.component';

describe('AsegDataComponent', () => {
  let component: AsegDataComponent;
  let fixture: ComponentFixture<AsegDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsegDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsegDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
