import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ClientsPageComponent} from './clients-page.component';
import {RouterTestingModule} from "@angular/router/testing";
import {ApolloTestingModule} from "apollo-angular/testing";
import {Apollo} from "apollo-angular";
import {NotificationService} from "carbon-components-angular";

describe('ClientsPageComponent', () => {
  let component: ClientsPageComponent;
  let fixture: ComponentFixture<ClientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ApolloTestingModule],
      providers: [Apollo, NotificationService],
      declarations: [ ClientsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
