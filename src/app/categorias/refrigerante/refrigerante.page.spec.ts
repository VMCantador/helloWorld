import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RefrigerantePage } from './refrigerante.page';

describe('RefrigerantePage', () => {
  let component: RefrigerantePage;
  let fixture: ComponentFixture<RefrigerantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RefrigerantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
