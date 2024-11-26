import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTareaExamenComponent } from './lista-tarea-examen.component';

describe('ListaTareaExamenComponent', () => {
  let component: ListaTareaExamenComponent;
  let fixture: ComponentFixture<ListaTareaExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaTareaExamenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTareaExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
