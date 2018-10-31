import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.css']
})
export class Project2Component {
  firstTeam = [
    {
      firstName: 'Kara',
      lastName: 'Cross',
      job: 'Layout design',
      description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      imageUrl: 'assets/img/user2.jpg'
    },
    {
      firstName: 'Silvia',
      lastName: 'Braun',
      job: 'Articles',
      description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      imageUrl: 'assets/img/user7.jpg'
    }
  ];
  secondTeam = [
    {
      firstName: 'Dekola',
      lastName: 'Lohan',
      job: 'Responsive design',
      description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      imageUrl: 'assets/img/user3.jpg'
    },
    {
      firstName: 'Tim',
      lastName: 'Ross',
      job: 'Forms',
      description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      imageUrl: 'assets/img/user9.jpg'
    }
  ];
  thirdTeam = [
    {
      firstName: 'Criss',
      lastName: 'Laim',
      job: 'Firebase HTTP',
      description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      imageUrl: 'assets/img/user6.jpg'
    }
  ];
  fourthTeam = [
    {
      firstName: 'Bill',
      lastName: 'Robson',
      job: 'Navigation',
      description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      imageUrl: 'assets/img/user8.jpg'
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


