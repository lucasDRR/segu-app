import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaBenefComponent } from './poliza-benef.component';

describe('PolizaBenefComponent', () => {
  let component: PolizaBenefComponent;
  let fixture: ComponentFixture<PolizaBenefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolizaBenefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaBenefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
