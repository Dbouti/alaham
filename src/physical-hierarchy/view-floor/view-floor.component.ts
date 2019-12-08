import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-floor',
  templateUrl: './view-floor.component.html',
  styleUrls: ['./view-floor.component.css']
})
export class ViewFloorComponent implements OnInit {

  @Input() floorData = [];
  @Input() buildingid:number;
  loader: boolean=false;
  currentValue = 0;
  constructor() { 
  }

  ngOnInit() {
  }

  expandPanel(building, index) {
    if (this.currentValue == index) {
      this.currentValue = -1;
    }
    else {
      this.currentValue = index;
    }
  }


}
