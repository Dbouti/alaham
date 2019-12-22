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



<div class="grid-x grid-margin-x">
    <mat-card class="large-5 cell">
        <mat-card-content>

            <div class="grid-x grid-padding-x">
                <div class="cell small-4">Address</div>
                <button class="float-right" mat-icon-button color="accent" aria-label="Example icon-button with a heart icon">
                    <mat-icon>more_vert</mat-icon>
                </button>
            </div>
            <div class="grid-x grid-padding-x margin-bottom-1">
                <div class="cell small-12">This is a dummy address</div>
            </div>
            <div class="grid-x grid-padding-x">
                <div class="cell small-4">Address 2</div>
            </div>
            <div class="grid-x grid-padding-x">
                <div class="cell small-12">This is a dummy address 2</div>
            </div>
        </mat-card-content>
    </mat-card>
</div>


<div class="grid-x">
    <mat-card class="cell margin-1" *ngFor="let data of addressData">
        <mat-card-content>
            <div class="cell small-12">
                <div class="subheading">
                    Description
                </div>
                <div class="mat-body-2">
                    {{data.description}}
                </div>
            </div>
            <div class="grid-x">
                <div class="cell small-6">
                    <div class="subheading">
                        Address Line 1
                    </div>
                    <div class="mat-body-2 display-inline-block">
                        {{data.address1}}
                    </div>
                </div>
                <div class="cell small-6">
                    <div class="subheading">
                        Address Line 2
                    </div>
                    <div class="mat-body-2">
                        {{data.address2}}
                    </div>
                </div>
            </div>
            <div class="grid-x">
                <div class="cell small-3">
                    <div class="subheading">
                        City
                    </div>
                    <div class="mat-body-2 display-inline-block">
                        {{data.city}}
                    </div>
                </div>
                <div class="cell small-3">
                    <div class="subheading">
                        State
                    </div>
                    <div class="mat-body-2">
                        {{data.state}}
                    </div>
                </div>
                <div class="cell small-3">
                    <div class="subheading">
                        Zip Code
                    </div>
                    <div class="mat-body-2">
                        {{data.zipcode}}
                    </div>
                </div>
            </div>
        </mat-card-content>
    </mat-card>
</div>

<div class="grid-x grid-margin-x small-up-3 medium-up-4 large-up-4">
    <mat-card class="cell margin-1" *ngFor="let data of addressData">
        <mat-card-title>
            <div class="grid-x">
                <div class="cell small-8">
                    <div class="mat-body-2">
                        {{data.State}}
                    </div>
                </div>
                <div class="cell small-3">
                    <button mat-button color="primary">
                        ACTIVE
                    </button>
                </div>
                <div class="cell auto">
                    <button mat-icon-button color="accent" aria-label="Example icon-button with a heart icon">
                        <mat-icon>more_vert</mat-icon>
                    </button>
                </div>
            </div>
        </mat-card-title>
        <mat-divider></mat-divider>
        <mat-card-content>

        </mat-card-content>
    </mat-card>
</div>



<div class="grid-x">
    <div class="cell">full width cell</div>
    <div class="cell">full width cell</div>
</div>
<div class="grid-x">
    <div class="cell small-6">6 cells</div>
    <div class="cell small-6">6 cells</div>
</div>
<div class="grid-x">
    <div class="cell medium-6 large-4">12/6/4 cells</div>
    <div class="cell medium-6 large-8">12/6/8 cells</div>
</div>



<div class="grid-x">
    <mat-card class="cell margin-1" *ngFor="let data of addressData">
        <mat-card-content>
            <div class="flex-container">
                <div class="cell auto">
                    <div class="mat-body-2">
                        {{data.zipcode}}
                    </div>
                </div>
            </div>
        </mat-card-content>
    </mat-card>
</div>
