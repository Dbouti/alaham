import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.css']
})
export class ViewRoomsComponent implements OnInit {
  displayedColumns: string[] = ['roomname', 'roomdescription'];
  @Input() roomData = [];
  @Input() floorid: number;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  constructor() {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.roomData);
    this.dataSource.sort = this.sort;
  }
  addRooms() {
    const data = this.dataSource.data;
    data.push({ 'roomname': "Room 3", "roomdescription": "Description 3" });
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
  }

}
