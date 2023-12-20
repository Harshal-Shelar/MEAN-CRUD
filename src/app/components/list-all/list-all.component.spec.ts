import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListALLComponent } from './list-all.component';

describe('ListAllComponent', () => {
  let component: ListALLComponent;
  let fixture: ComponentFixture<ListALLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListALLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListALLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
