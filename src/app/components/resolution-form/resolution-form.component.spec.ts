import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionFormComponent } from './resolution-form.component';

describe('ResolutionFormComponent', () => {
  let component: ResolutionFormComponent;
  let fixture: ComponentFixture<ResolutionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolutionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolutionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
