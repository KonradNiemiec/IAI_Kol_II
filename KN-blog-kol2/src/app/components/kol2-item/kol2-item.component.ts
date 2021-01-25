import { Component, Input, OnInit } from '@angular/core';
import { KNDataService } from 'D:/Studia/III_semestr/informatyka_aplikacji_internetu_Piwko/IAI_Kol_II/KN-blog-kol2/src/app/services/kn-data.service';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'kol2-item',
  templateUrl: './kol2-item.component.html',
  styleUrls: ['./kol2-item.component.css']
})
export class Kol2ItemComponent implements OnInit {

    public items$: any;

    public image = '';
    public text!: string;
    public id!: number;

  constructor(private service: KNDataService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
      this.getAll();
    }

    getAll(){
       this.service.getAll().subscribe(response => {
         this.items$ = response;
     });
    }

}
