import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNeopsDashboardComponent } from './ngx-neops-dashboard.component';

describe('NgxNeopsDashboardComponent', () => {
  let component: NgxNeopsDashboardComponent;
  let fixture: ComponentFixture<NgxNeopsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNeopsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNeopsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
