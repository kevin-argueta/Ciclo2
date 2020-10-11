import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasoComponent } from './gaso.component';

describe('GasoComponent', () => {
  let component: GasoComponent;
  let fixture: ComponentFixture<GasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
