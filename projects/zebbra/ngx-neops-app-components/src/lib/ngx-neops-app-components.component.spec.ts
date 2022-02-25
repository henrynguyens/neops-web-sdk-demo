import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNeopsAppComponentsComponent } from './ngx-neops-app-components.component';

describe('NgxNeopsAppComponentsComponent', () => {
  let component: NgxNeopsAppComponentsComponent;
  let fixture: ComponentFixture<NgxNeopsAppComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNeopsAppComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNeopsAppComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
