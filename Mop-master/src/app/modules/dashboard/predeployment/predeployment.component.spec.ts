import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredeploymentComponent } from './predeployment.component';

describe('PredeploymentComponent', () => {
  let component: PredeploymentComponent;
  let fixture: ComponentFixture<PredeploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredeploymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
