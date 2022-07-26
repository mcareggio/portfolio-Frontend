import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeartComponent } from './welcomeart.component';

describe('WelcomeartComponent', () => {
  let component: WelcomeartComponent;
  let fixture: ComponentFixture<WelcomeartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
