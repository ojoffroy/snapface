import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
      this.title = 'iguane';
      this.description = 'Mon meilleur avatar depuis longtemps !';
      this.createdDate = new Date();
      this.snaps = 6;
      this.imageUrl = 'https://www.codeur.com/system/user_profiles/avatars/000/506/874/large/avatar.jpg?1638200089';
      this.buttonText = 'Oh Snap !';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap !') {
      this.snaps++;
      this.buttonText = 'Oops, unSnap !'
    } else {
      this.snaps--;
      this.buttonText = 'Oh Snap !';
    }
  }
}
