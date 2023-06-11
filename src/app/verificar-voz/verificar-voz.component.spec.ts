import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarVozComponent } from './verificar-voz.component';

describe('VerificarVozComponent', () => {
  let component: VerificarVozComponent;
  let fixture: ComponentFixture<VerificarVozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarVozComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarVozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
