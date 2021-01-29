import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMentionComponent } from './page-mention.component';

describe('PageMentionComponent', () => {
  let component: PageMentionComponent;
  let fixture: ComponentFixture<PageMentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMentionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
