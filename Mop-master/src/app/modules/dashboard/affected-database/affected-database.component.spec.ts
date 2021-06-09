import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectedDatabaseComponent } from './affected-database.component';

describe('AffectedDatabaseComponent', () => {
  let component: AffectedDatabaseComponent;
  let fixture: ComponentFixture<AffectedDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectedDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectedDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
