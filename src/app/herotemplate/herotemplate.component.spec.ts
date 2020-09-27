import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerotemplateComponent } from './herotemplate.component';

describe('HerotemplateComponent', () => {
  let component: HerotemplateComponent;
  let fixture: ComponentFixture<HerotemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerotemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerotemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
