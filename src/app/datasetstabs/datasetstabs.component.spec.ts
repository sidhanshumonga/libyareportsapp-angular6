import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetstabsComponent } from './datasetstabs.component';

describe('DatasetstabsComponent', () => {
  let component: DatasetstabsComponent;
  let fixture: ComponentFixture<DatasetstabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetstabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetstabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
