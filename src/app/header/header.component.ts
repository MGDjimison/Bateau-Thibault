import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonButton, IonButtons } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports : [IonHeader, IonToolbar, IonTitle, IonButton, RouterModule, IonButtons],
})
export class HeaderComponent  implements OnInit {
  ngOnInit() {}

}
