import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgunitlibraryComponent } from './orgunitlibrary.component';

describe('OrgunitlibraryComponent', () => {
  let component: OrgunitlibraryComponent;
  let fixture: ComponentFixture<OrgunitlibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgunitlibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgunitlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
