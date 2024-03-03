import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderImgComponent } from './slider-img.component';

describe('SliderImgComponent', () => {
  let component: SliderImgComponent;
  let fixture: ComponentFixture<SliderImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderImgComponent]
    });
    fixture = TestBed.createComponent(SliderImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
