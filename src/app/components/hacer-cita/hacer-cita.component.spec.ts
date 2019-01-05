import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerCitaComponent } from './hacer-cita.component';

describe('HacerCitaComponent', () => {
  let component: HacerCitaComponent;
  let fixture: ComponentFixture<HacerCitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HacerCitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HacerCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
