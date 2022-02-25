import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNeopsGenericTableComponent } from './ngx-neops-generic-table.component';

describe('NgxNeopsGenericTableComponent', () => {
  let component: NgxNeopsGenericTableComponent;
  let fixture: ComponentFixture<NgxNeopsGenericTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNeopsGenericTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNeopsGenericTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
