import { BuildingService } from './../building.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.css']
})
export class AddBuildingComponent implements OnInit {

  buildingModel = {};

  constructor(public dialogRef: MatDialogRef<AddBuildingComponent>,
    private _service: BuildingService
  ) {

  }

  ngOnInit() {
  }
  addBuilding() {
    this._service.onBuildingAdd.emit(this.buildingModel)
    this._service.allBuildingDataFilter.push({
      "name": this.buildingModel['name'],
      "id": parseInt(this.buildingModel['id'])
    });
    console.log(this._service.allBuildingDataFilter);

    this.dialogRef.close();

  }

}
