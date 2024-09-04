import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ServiceAllService } from '../../shared/service/service-all.service';

@Component({
  standalone: true,
  selector: 'app-cards',
  imports: [MatIconModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  // changeDetection : ChangeDetectionStrategy.OnPush,
})
export class CardsComponent implements OnInit {
  value: any;
  listUsuarios: any = [];
  teste: any;

  constructor(private api: ServiceAllService) {}

  ngOnInit(): void {
   this.getValues();
   
  }
  getValues(){
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


  getValuesDois() {
    this.api
    .getList()
    .subscribe((data: any) => (this.listUsuarios = data.items));
  console.log(this.listUsuarios);
  }
}
