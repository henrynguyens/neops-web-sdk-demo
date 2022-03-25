import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DevicesPageComponent} from './devices-page.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ApolloTestingModule} from "apollo-angular/testing";
import {Apollo} from "apollo-angular";
import {NotificationService} from "carbon-components-angular";

describe('DevicesPageComponent', () => {
  let component: DevicesPageComponent;
  let fixture: ComponentFixture<DevicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule],
      providers: [Apollo, NotificationService],
      declarations: [ DevicesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
