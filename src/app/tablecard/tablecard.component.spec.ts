import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecardComponent } from './tablecard.component';

describe('TablecardComponent', () => {
  let component: TablecardComponent;
  let fixture: ComponentFixture<TablecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
