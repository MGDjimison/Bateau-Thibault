import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeBateauPage } from './liste-bateau.page';

describe('ListeBateauPage', () => {
  let component: ListeBateauPage;
  let fixture: ComponentFixture<ListeBateauPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBateauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
