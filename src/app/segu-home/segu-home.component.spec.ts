import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguHomeComponent } from './segu-home.component';

describe('SeguHomeComponent', () => {
  let component: SeguHomeComponent;
  let fixture: ComponentFixture<SeguHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
