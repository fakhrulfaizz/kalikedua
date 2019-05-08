import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletetoggleComponent } from './autocompletetoggle.component';

describe('AutocompletetoggleComponent', () => {
  let component: AutocompletetoggleComponent;
  let fixture: ComponentFixture<AutocompletetoggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompletetoggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletetoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
