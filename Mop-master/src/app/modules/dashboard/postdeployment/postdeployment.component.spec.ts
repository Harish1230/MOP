import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdeploymentComponent } from './postdeployment.component';

describe('PostdeploymentComponent', () => {
  let component: PostdeploymentComponent;
  let fixture: ComponentFixture<PostdeploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostdeploymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
