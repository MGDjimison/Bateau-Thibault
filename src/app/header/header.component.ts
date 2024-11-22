import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports : [IonHeader, IonToolbar, IonTitle, IonButton],
})
export class HeaderComponent  implements OnInit {
  ngOnInit() {}

}
