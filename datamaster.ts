import { BuildingMockService } from './../building.mock';
import { BuildingService } from './../building.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuildingComponent } from './view-building.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, from } from 'rxjs';
import { Data } from '../../model/names';

fdescribe('ViewBuildingComponent', () => {
  let component: ViewBuildingComponent;
  let fixture: ComponentFixture<ViewBuildingComponent>;
  let mockSvc: BuildingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ViewBuildingComponent],
      providers: [{
        provide: BuildingService, useClass: BuildingMockService
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    mockSvc = TestBed.get(BuildingService);
    fixture = TestBed.createComponent(ViewBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit("it should load data", () => {
    component.getCall();
    expect(component.dataOnce.length).toBeGreaterThan(0);
    console.log(component.dataOnce);
  })
});



@import 'mixins'; 
@include container();

@import '~foundation-sites/scss/foundation';
@include foundation-prototype-classes;
