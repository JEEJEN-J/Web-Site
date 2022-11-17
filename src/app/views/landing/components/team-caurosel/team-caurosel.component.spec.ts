import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCauroselComponent } from './team-caurosel.component';

describe('TeamCauroselComponent', () => {
  let component: TeamCauroselComponent;
  let fixture: ComponentFixture<TeamCauroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCauroselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCauroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
