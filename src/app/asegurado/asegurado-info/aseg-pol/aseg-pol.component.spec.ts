import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsegPolComponent } from './aseg-pol.component';

describe('AsegPolComponent', () => {
  let component: AsegPolComponent;
  let fixture: ComponentFixture<AsegPolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsegPolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsegPolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
