import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhysicalHierarchyComponent } from './physical-hierarchy.component';
import { ViewBuildingComponent } from './view-building/view-building.component';


const routes: Routes = [
  {
    path: "",
    component: PhysicalHierarchyComponent,
    children: [
      {
        path: "",
        component: ViewBuildingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysicalHierarchyRoutingModule { }
