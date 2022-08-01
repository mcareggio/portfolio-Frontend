import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullpagealertComponent } from './fullpagealert.component';

describe('FullpagealertComponent', () => {
  let component: FullpagealertComponent;
  let fixture: ComponentFixture<FullpagealertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullpagealertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullpagealertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
