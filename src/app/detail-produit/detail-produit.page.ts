import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from 'src/app/header/header.component';
import { TabsComponent } from 'src/app/tabs/tabs.component';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.page.html',
  styleUrls: ['./detail-produit.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, HeaderComponent, TabsComponent]
})
export class DetailProduitPage implements OnInit {

  produit!:{
    id:Number,
    name:string,
    category: Number,
    price: Number,
    unit:string,
    availability:boolean,
    sale:boolean,
    discount:Number,
    comments:string,
    owner:string
  }

  prod: any = {};

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state) {
        this.produit = this.router.getCurrentNavigation()?.extras.state?.["produit"];
      }
    })

    this.prod = {
      id:8,
      name: "some_random_name",
      category: 3,
      price: 34.5,
      unit: "kg"
    }
  }

}
