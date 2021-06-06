import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaDetailsComponent } from './poliza-details.component';

describe('PolizaDetailsComponent', () => {
  let component: PolizaDetailsComponent;
  let fixture: ComponentFixture<PolizaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
