import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsDoComponent } from './lets-do.component';

describe('LetsDoComponent', () => {
  let component: LetsDoComponent;
  let fixture: ComponentFixture<LetsDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetsDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
