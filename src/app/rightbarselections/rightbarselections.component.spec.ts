import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightbarselectionsComponent } from './rightbarselections.component';

describe('RightbarselectionsComponent', () => {
  let component: RightbarselectionsComponent;
  let fixture: ComponentFixture<RightbarselectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightbarselectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightbarselectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
