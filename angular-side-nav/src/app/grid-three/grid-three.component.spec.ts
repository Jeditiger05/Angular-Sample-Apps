import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridThreeComponent } from './grid-three.component';

describe('GridThreeComponent', () => {
  let component: GridThreeComponent;
  let fixture: ComponentFixture<GridThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
