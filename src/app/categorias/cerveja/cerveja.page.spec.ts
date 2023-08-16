import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CervejaPage } from './cerveja.page';

describe('CervejaPage', () => {
  let component: CervejaPage;
  let fixture: ComponentFixture<CervejaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CervejaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
