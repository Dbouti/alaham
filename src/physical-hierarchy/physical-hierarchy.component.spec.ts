import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalHierarchyComponent } from './physical-hierarchy.component';

describe('PhysicalHierarchyComponent', () => {
  let component: PhysicalHierarchyComponent;
  let fixture: ComponentFixture<PhysicalHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalHierarchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
