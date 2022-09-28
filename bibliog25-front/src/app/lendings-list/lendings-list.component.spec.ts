import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingsListComponent } from './lendings-list.component';

describe('LendingsListComponent', () => {
  let component: LendingsListComponent;
  let fixture: ComponentFixture<LendingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LendingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
