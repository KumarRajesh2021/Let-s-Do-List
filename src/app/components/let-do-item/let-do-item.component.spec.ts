import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetDoItemComponent } from './let-do-item.component';

describe('LetDoItemComponent', () => {
  let component: LetDoItemComponent;
  let fixture: ComponentFixture<LetDoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetDoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetDoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
