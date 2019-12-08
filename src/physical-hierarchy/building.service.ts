import { filter } from 'rxjs/operators';
import { Injectable, EventEmitter } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  public onBuildingAdd = new EventEmitter<any>();

  allBuildingDataFilter: any = [
    {

      name: "building 1",

      id: 1,

      floors: [

        {

          name: "floor1",

          id: 1,

          rooms: [

            {

              roomid: 1,

              roomname: "Room1",

              roomdescription: "Description 1 for floor 1",

              roomtype: "In-patient",

              POCAssigned: "POC1"

            },

            {

              roomid: 2,

              roomname: "Room2",

              roomdescription: "Empty floor 2",

              roomtype: "Out-patient",

              POCAssigned: ""

            }

          ],

          spaces: [

            {

              spaceid: 1,

              spacename: "Space 1",

              POCAssigned: "",

              spaceDescription: "Description for space 1"

            },

            {

              spaceid: 2,

              spacename: "Space 2",

              POCAssigned: "",

              spaceDescription: "Description for space 2"

            }

          ]

        },

        {

          name: "floor2",

          id: 2,

          rooms: [

            {

              roomid: 1,

              roomname: "Room1",

              roomdescription: "Description for room 1 for floor 2",

              roomtype: "In-patient",

              POCAssigned: "POC1"

            },

            {

              roomid: 2,

              roomname: "Room2",

              roomdescription: "floor 2 room description",

              roomtype: "Out-patient",

              POCAssigned: ""

            }

          ],

          spaces: [

            {

              spaceid: 1,

              spacename: "Space 1",

              POCAssigned: "",

              spaceDescription: "Description for space 1"

            },

            {

              spaceid: 2,

              spacename: "Space 2",

              POCAssigned: "",

              spaceDescription: "Description for space 2"

            }

          ]

        }

      ]

    },

    {

      name: "building 2",

      id: 2,

      floors: [

        {

          name: "floor1 for building 2",

          id: 1,

          rooms: [

            {

              roomid: 1,

              roomname: "Room1",

              roomdescription: "Description 1 for floor 1",

              roomtype: "In-patient",

              POCAssigned: "POC1"

            },

            {

              roomid: 2,

              roomname: "Room2",

              roomdescription: "Empty floor 2",

              roomtype: "Out-patient",

              POCAssigned: ""

            }

          ],

          spaces: [

            {

              spaceid: 1,

              spacename: "Space 1",

              POCAssigned: "",

              spaceDescription: "Description for space 1"

            },

            {

              spaceid: 2,

              spacename: "Space 2",

              POCAssigned: "",

              spaceDescription: "Description for space 2"

            }

          ]

        },

        {

          name: "floor2",

          id: 2,

          rooms: [

            {

              roomid: 1,

              roomname: "Room1",

              roomdescription: "Description for room 1 for floor 2",

              roomtype: "In-patient",

              POCAssigned: "POC1"

            },

            {

              roomid: 2,

              roomname: "Room2",

              roomdescription: "floor 2 room description",

              roomtype: "Out-patient",

              POCAssigned: ""

            }

          ],

          spaces: [

            {

              spaceid: 1,

              spacename: "Space 1",

              POCAssigned: "",

              spaceDescription: "Description for space 1"

            },

            {

              spaceid: 2,

              spacename: "Space 2",

              POCAssigned: "",

              spaceDescription: "Description for space 2"

            }

          ]

        }

      ]

    },

    {

      name: "building 3",

      id: 3,

      floors: [

        {

          name: "floor1 for building 3",

          id: 1,

          rooms: [

            {

              roomid: 1,

              roomname: "Room1",

              roomdescription: "Description 1 for floor 1",

              roomtype: "In-patient",

              POCAssigned: "POC1"

            },

            {

              roomid: 2,

              roomname: "Room2",

              roomdescription: "Empty floor 2",

              roomtype: "Out-patient",

              POCAssigned: ""

            }

          ],

          spaces: [

            {

              spaceid: 1,

              spacename: "Space 1",

              POCAssigned: "",

              spaceDescription: "Description for space 1"

            },

            {

              spaceid: 2,

              spacename: "Space 2",

              POCAssigned: "",

              spaceDescription: "Description for space 2"

            }

          ]

        },

        {

          name: "floor2",

          id: 2,

          rooms: [

            {

              roomid: 1,

              roomname: "Room1",

              roomdescription: "Description for room 1 for floor 2",

              roomtype: "In-patient",

              POCAssigned: "POC1"

            },

            {

              roomid: 2,

              roomname: "Room2",

              roomdescription: "floor 2 room description",

              roomtype: "Out-patient",

              POCAssigned: ""

            }

          ],

          spaces: [

            {

              spaceid: 1,

              spacename: "Space 1",

              POCAssigned: "",

              spaceDescription: "Description for space 1"

            },
            {

              spaceid: 2,

              spacename: "Space 2",

              POCAssigned: "",

              spaceDescription: "Description for space 2"

            }

          ]

        }

      ]

    },
    {
      name: "building 4",
      id: 4,
      floors: []
    },
    {
      name: "Some 5",
      id: 5,
      floors: []
    },
    {
      name: "Some Building 6",
      id: 6,
      floors: [
        {
          name:"floor 1 for 6",
          id:1
        }
      ]
    }

  ];

  allBuildingData: any = [

    {

      name: "building 1",

      id: 1,

      floors: [

        {

          name: "floor1",

          id: 1,

          rooms: [

            {

              roomid: 1,

              roomname: "Room1",

              roomdescription: "Description 1 for floor 1",

              roomtype: "In-patient",

              POCAssigned: "POC1"

            },

            {

              roomid: 2,

              roomname: "Room2",

              roomdescription: "Empty floor 2",

              roomtype: "Out-patient",

              POCAssigned: ""

            }

          ],

          spaces: [

            {

              spaceid: 1,

              spacename: "Space 1",

              POCAssigned: "",

              spaceDescription: "Description for space 1"

            },

            {

              spaceid: 2,

              spacename: "Space 2",

              POCAssigned: "",

              spaceDescription: "Description for space 2"

            }

          ]

        },

        {

          name: "floor2",

          id: 2,

          rooms: [

            {

              roomid: 1,

              roomname: "Room1",

              roomdescription: "Description for room 1 for floor 2",

              roomtype: "In-patient",

              POCAssigned: "POC1"

            },

            {

              roomid: 2,

              roomname: "Room2",

              roomdescription: "floor 2 room description",

              roomtype: "Out-patient",

              POCAssigned: ""

            }

          ],

          spaces: [

            {

              spaceid: 1,

              spacename: "Space 1",

              POCAssigned: "",

              spaceDescription: "Description for space 1"

            },

            {

              spaceid: 2,

              spacename: "Space 2",

              POCAssigned: "",

              spaceDescription: "Description for space 2"

            }

          ]

        }

      ]

    },
    {
      name: "building 2",
      id: 2
    },
    {
      name: "building 3",
      id: 3
    },
    {
      name: "building 4",
      id: 4
    },
    {
      name: "building 6",
      id: 6
    }

  ];


  constructor() { }

  getFirstHit() {
    return of(this.allBuildingData);
  }
  getParticularBuilding(id) {
    const dataforbuilding = this.allBuildingDataFilter.find((elem) => {
      return elem.id == id;
    });
    return of(dataforbuilding);
  }
}
