import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNeopsAppServicesComponent } from './ngx-neops-app-services.component';

describe('NgxNeopsAppServicesComponent', () => {
  let component: NgxNeopsAppServicesComponent;
  let fixture: ComponentFixture<NgxNeopsAppServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNeopsAppServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNeopsAppServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
