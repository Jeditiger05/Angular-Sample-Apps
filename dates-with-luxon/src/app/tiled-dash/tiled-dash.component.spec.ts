import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiledDashComponent } from './tiled-dash.component';

describe('TiledDashComponent', () => {
  let component: TiledDashComponent;
  let fixture: ComponentFixture<TiledDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiledDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiledDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
