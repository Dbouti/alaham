import { Component, OnInit } from '@angular/core';
import { BuildingService } from '../building.service';

@Component({
  selector: 'app-view-building',
  templateUrl: './view-building.component.html',
  styleUrls: ['./view-building.component.css']
})
export class ViewBuildingComponent implements OnInit {

  dataOnce = [];
  currentValue = 0;
  oneBuilding: any;
  loader: boolean = false;
  constructor(private buidingService: BuildingService) { }

  ngOnInit() {
    this.buidingService.getFirstHit().subscribe(res => {
      this.dataOnce = res;
    });
    this.buidingService.onBuildingAdd.subscribe(res => {
      this.dataOnce.push(res);
      console.log(this.dataOnce);
    })
  }
  expandPanel(building, index) {
    if (this.currentValue == index) {
      this.currentValue = -1;
    }
    else {
      this.loader = true;
      this.currentValue = index;
      this.getExpandedValue(building, index);
    }
  }

  getExpandedValue(building, index) {
    this.buidingService.getParticularBuilding(building.id).subscribe(res => {
      this.dataOnce[index] = res;
      setTimeout(() => {
        this.loader = false;
      }, 500);
    }
    )
  }

}
