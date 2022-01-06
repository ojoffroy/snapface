import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      title: 'iguane',
      description: 'Mon meilleur avatar depuis longtemps !',
      imageUrl: 'https://www.codeur.com/system/user_profiles/avatars/000/506/874/large/avatar.jpg?1638200089',
      createdDate: new Date(),
      snaps: 0,
      location: 'Toulouse'
    },
    {
      title: 'Belle montagne',
      description: 'Un endroit magnifique à voir',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/10/11/07/13/mountains-3739050_960_720.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Les Pyrénées'
    },
    {
      title: 'Un bon dessert',
      description: 'Un regal pour les papilles',
      imageUrl: 'https://c.pxhere.com/images/39/68/f5da084a273d7a4e81add613b26c-1608167.jpg!d',
      createdDate: new Date(),
      snaps: 0
    }
  ];
}
