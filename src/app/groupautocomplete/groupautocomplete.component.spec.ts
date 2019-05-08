import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupautocompleteComponent } from './groupautocomplete.component';

describe('GroupautocompleteComponent', () => {
  let component: GroupautocompleteComponent;
  let fixture: ComponentFixture<GroupautocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupautocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupautocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
