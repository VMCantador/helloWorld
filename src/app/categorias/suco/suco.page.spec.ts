import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SucoPage } from './suco.page';

describe('SucoPage', () => {
  let component: SucoPage;
  let fixture: ComponentFixture<SucoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SucoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
