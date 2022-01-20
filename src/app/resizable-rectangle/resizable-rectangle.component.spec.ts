import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizableRectangleComponent } from './resizable-rectangle.component';

describe('ResizableRectangleComponent', () => {
  let component: ResizableRectangleComponent;
  let fixture: ComponentFixture<ResizableRectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizableRectangleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizableRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
