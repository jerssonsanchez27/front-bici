import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Innventario } from './innventario';

describe('Innventario', () => {
  let component: Innventario;
  let fixture: ComponentFixture<Innventario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Innventario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Innventario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
