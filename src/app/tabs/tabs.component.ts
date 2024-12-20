import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonTabs, IonHeader, IonContent, IonToolbar, IonTitle, IonTab, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonLabel, IonTabs, IonHeader, IonContent, IonToolbar, IonTitle, IonTab, IonTabBar, IonTabButton, IonIcon, IonLabel, RouterLink ]
})
export class TabsComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

}
