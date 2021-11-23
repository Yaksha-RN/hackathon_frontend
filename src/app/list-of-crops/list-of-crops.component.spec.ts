import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCropsComponent } from './list-of-crops.component';

describe('ListOfCropsComponent', () => {
  let component: ListOfCropsComponent;
  let fixture: ComponentFixture<ListOfCropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
