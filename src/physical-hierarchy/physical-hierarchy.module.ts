import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { PhysicalHierarchyComponent } from './physical-hierarchy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhysicalHierarchyRoutingModule } from './physical-hierarchy-routing.module';
import { ViewBuildingComponent } from './view-building/view-building.component';
import { ViewFloorComponent } from './view-floor/view-floor.component';
import { ViewRoomsComponent } from './view-rooms/view-rooms.component';
import { AddBuildingComponent } from './add-building/add-building.component';


@NgModule({
  declarations: [
    PhysicalHierarchyComponent,
    ViewBuildingComponent,
    ViewFloorComponent,
    ViewRoomsComponent,
    AddBuildingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    PhysicalHierarchyRoutingModule
  ],
  bootstrap: [],
  entryComponents: [AddBuildingComponent]
})
export class PhysicalHierarchyModule { }
