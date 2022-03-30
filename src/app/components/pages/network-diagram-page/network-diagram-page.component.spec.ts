import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkDiagramPageComponent } from './network-diagram-page.component';

describe('NetworkDiagramPageComponent', () => {
  let component: NetworkDiagramPageComponent;
  let fixture: ComponentFixture<NetworkDiagramPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkDiagramPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkDiagramPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
