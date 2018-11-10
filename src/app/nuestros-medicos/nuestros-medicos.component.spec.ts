import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosMedicosComponent } from './nuestros-medicos.component';

describe('NuestrosMedicosComponent', () => {
  let component: NuestrosMedicosComponent;
  let fixture: ComponentFixture<NuestrosMedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestrosMedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrosMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
