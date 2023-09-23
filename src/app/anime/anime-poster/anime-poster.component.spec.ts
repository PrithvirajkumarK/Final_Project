import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimePosterComponent } from './anime-poster.component';

describe('AnimePosterComponent', () => {
  let component: AnimePosterComponent;
  let fixture: ComponentFixture<AnimePosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimePosterComponent]
    });
    fixture = TestBed.createComponent(AnimePosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
