import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveGuardExComponent } from './resolve-guard-ex.component';

describe('ResolveGuardExComponent', () => {
  let component: ResolveGuardExComponent;
  let fixture: ComponentFixture<ResolveGuardExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolveGuardExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolveGuardExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
