import { AddBuildingComponent } from './add-building/add-building.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-physical-hierarchy',
  templateUrl: './physical-hierarchy.component.html',
  styleUrls: ['./physical-hierarchy.component.css']
})
export class PhysicalHierarchyComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  addbuilding() {
    this.dialog.open(AddBuildingComponent);
  }
}
