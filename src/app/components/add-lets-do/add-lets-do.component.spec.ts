import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLetsDoComponent } from './add-lets-do.component';

describe('AddLetsDoComponent', () => {
  let component: AddLetsDoComponent;
  let fixture: ComponentFixture<AddLetsDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLetsDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLetsDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
