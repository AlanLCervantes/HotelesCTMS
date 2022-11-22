import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRememberComponent } from './about-remember.component';

describe('AboutRememberComponent', () => {
  let component: AboutRememberComponent;
  let fixture: ComponentFixture<AboutRememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutRememberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutRememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
