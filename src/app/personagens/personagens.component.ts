import { Component, OnInit } from '@angular/core';
import { PersonagensService } from 'src/app/service/personagens.service';


@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css'],
})
export class PersonagensComponent implements OnInit {
  perso: any;
  imgSize:string = "/portrait_uncanny"
  hasValue:boolean = false

  constructor(private personagensService: PersonagensService,) {}

  ngOnInit(): void {
    this.personagens()
  }
  public personagens() {
    this.personagensService.getPersonagens().subscribe(
      (data) => {
        this.perso = data.data.results;
        this.hasValue = true
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
