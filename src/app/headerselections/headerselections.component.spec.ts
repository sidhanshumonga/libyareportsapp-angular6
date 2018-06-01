import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderselectionsComponent } from './headerselections.component';

describe('HeaderselectionsComponent', () => {
  let component: HeaderselectionsComponent;
  let fixture: ComponentFixture<HeaderselectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderselectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderselectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
