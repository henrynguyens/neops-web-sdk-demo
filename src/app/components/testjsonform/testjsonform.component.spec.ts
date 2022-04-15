import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestjsonformComponent } from './testjsonform.component';

describe('TestjsonformComponent', () => {
  let component: TestjsonformComponent;
  let fixture: ComponentFixture<TestjsonformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestjsonformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestjsonformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
