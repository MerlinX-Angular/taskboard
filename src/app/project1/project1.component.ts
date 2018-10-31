import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component {
  firstTeam = [
    {
      firstName: 'Lia',
      lastName: 'Levele',
      job: 'Layout design',
      description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      imageUrl: 'assets/img/user1.jpg'
    }

  ];
  secondTeam = [
    {
      firstName: 'Bernice',
      lastName: 'Riley',
      job: 'Responsive design',
      description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      imageUrl: 'assets/img/user4.jpg'
    }
  ];
  thirdTeam = [
    {
      firstName: 'Criss',
      lastName: 'Laim',
      job: 'Firebase HTTP',
      description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      imageUrl: 'assets/img/user6.jpg'
    },
    {
      firstName: 'Silvia',
      lastName: 'Braun',
      job: 'Articles',
      description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      imageUrl: 'assets/img/user7.jpg'
    }
  ];
  fourthTeam = [
    {
      firstName: 'Bill',
      lastName: 'Robson',
      job: 'Navigation',
      description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      imageUrl: 'assets/img/user8.jpg'
    },
    {
      firstName: 'Tim',
      lastName: 'Ross',
      job: 'Forms',
      description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
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


