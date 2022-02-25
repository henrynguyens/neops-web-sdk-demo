import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNeopsClientComponent } from './ngx-neops-client.component';

describe('NgxNeopsClientComponent', () => {
  let component: NgxNeopsClientComponent;
  let fixture: ComponentFixture<NgxNeopsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNeopsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNeopsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
