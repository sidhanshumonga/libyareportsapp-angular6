import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltablesComponent } from './alltables.component';

describe('AlltablesComponent', () => {
  let component: AlltablesComponent;
  let fixture: ComponentFixture<AlltablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
