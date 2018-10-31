import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  firstTeam = [
    {
      firstName: 'Lia',
      lastName: 'Levele',
      job: 'Designer',
      projects: 5,
      imageUrl: 'assets/img/user1.jpg'
    },
    {
      firstName: 'Kara',
      lastName: 'Cross',
      job: 'Backend Developer',
      projects: 3,
      imageUrl: 'assets/img/user2.jpg'
    },
    {
      firstName: 'Dekola',
      lastName: 'Lohan',
      job: 'Angular Developer',
      projects: 8,
      imageUrl: 'assets/img/user3.jpg'
    },

  ];
  secondTeam = [
    {
      firstName: 'Bernice',
      lastName: 'Riley',
      job: 'Designer',
      projects: 5,
      imageUrl: 'assets/img/user4.jpg'
    },
    {
      firstName: 'Jim',
      lastName: 'Roder',
      job: 'Backend Developer',
      projects: 10,
      imageUrl: 'assets/img/user5.jpg'
    }
  ];
  thirdTeam = [
    {
      firstName: 'Criss',
      lastName: 'Laim',
      job: 'Backend Developer',
      projects: 10,
      imageUrl: 'assets/img/user6.jpg'
    },
    {
      firstName: 'Silvia',
      lastName: 'Braun',
      job: 'Designer',
      projects: 4,
      imageUrl: 'assets/img/user7.jpg'
    },
    {
      firstName: 'Bill',
      lastName: 'Robson',
      job: 'Angular Developer',
      projects: 7,
      imageUrl: 'assets/img/user8.jpg'
    },
    {
      firstName: 'Tim',
      lastName: 'Ross',
      job: 'Front End Developer',
      projects: 4,
      imageUrl: 'assets/img/user9.jpg'
    }
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}

