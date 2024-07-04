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
  listUsuarios: any[] = [
    // {nomeAuto:'gui', descricaoRep:'abobora'}
  ];
  teste: any;

  constructor(
    private api: ServiceAllService,
  ) { }

  ngOnInit(): void {
    debugger
    this.getInfos();
    console.log(this.listUsuarios, "valores do back")
  }

  getInfos(){
    debugger
    this.api.getAll().subscribe((result)=> {
      this.teste = result 
      this.teste.forEach((item: any) => {
        this.listUsuarios.push({
          descricaoRep: item.description,
          foto: item.owner.avatar_url,
          nomeAuto: item.name,
          nomeRep: item.owner.login,
          numEstrelas: item.forks,
        });
     })
    console.log(result, "<-- valores");
  })
}
}
