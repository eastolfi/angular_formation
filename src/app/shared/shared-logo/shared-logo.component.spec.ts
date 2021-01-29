import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLogoComponent } from './shared-logo.component';

describe('SharedLogoComponent', () => {
  let component: SharedLogoComponent;
  let fixture: ComponentFixture<SharedLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
