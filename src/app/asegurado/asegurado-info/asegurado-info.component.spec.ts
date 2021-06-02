import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguradoInfoComponent } from './asegurado-info.component';

describe('AseguradoInfoComponent', () => {
  let component: AseguradoInfoComponent;
  let fixture: ComponentFixture<AseguradoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AseguradoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AseguradoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
