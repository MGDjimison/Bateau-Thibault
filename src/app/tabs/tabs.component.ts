import { Component, OnInit } from '@angular/core';
import { IonTabs, IonHeader, IonContent, IonToolbar, IonTitle, IonTab, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonLabel, IonTabs, IonHeader, IonContent, IonToolbar, IonTitle, IonTab, IonTabBar, IonTabButton, IonIcon, IonLabel ]
})
export class TabsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
