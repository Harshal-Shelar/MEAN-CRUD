import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalNumberComponent } from './total-number.component';

describe('TotalNumberComponent', () => {
  let component: TotalNumberComponent;
  let fixture: ComponentFixture<TotalNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
