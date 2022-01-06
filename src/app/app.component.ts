import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'iguane',
      'Mon meilleur avatar depuis longtemps !',
      'https://www.codeur.com/system/user_profiles/avatars/000/506/874/large/avatar.jpg?1638200089',
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap(
      'Belle montagne',
      'Un endroit magnifique à voir',
      'https://cdn.pixabay.com/photo/2018/10/11/07/13/mountains-3739050_960_720.jpg',
      new Date(),
      0
    );
    this.myLastSnap = new FaceSnap(
      'Un bon dessert',
      'Un regal pour les papilles',
      'https://c.pxhere.com/images/39/68/f5da084a273d7a4e81add613b26c-1608167.jpg!d',
      new Date(),
      0
    )
  }
}
