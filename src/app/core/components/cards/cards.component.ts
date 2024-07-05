import { Component, OnInit } from '@angular/core';
import { ServiceAllService } from '../../shared/service/service-all.service';
import { HttpClient } from '@angular/common/http';
import { IUsuarios } from '../../interface/usuarios';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  value: any;
  listUsuarios: any[] =[];
    teste: any;

  constructor(
    private api: ServiceAllService,
  ) { }

  ngOnInit(): void {
    this.api.getList().subscribe((result)=> {
      debugger
      this.value = result
      this.value.items.forEach((items: any) => {
        this.listUsuarios.push({
          descricaoRep: items.description,
          foto: items.owner.avatar_url,
          nomeAuto: items.name,
          nomeRep: items.owner.login,
          numEstrelas: items.forks,
        });
     })
    })
    console.log(this.listUsuarios, "<-- valores");

  }
}
