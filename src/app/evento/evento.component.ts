import { Component, OnInit } from '@angular/core';
import { PersonagensService } from 'src/app/service/personagens.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  constructor(private personagensService: PersonagensService,) { }
  evento: any;
  imgSize:string = "/portrait_uncanny"
  hasValue:boolean = false

  ngOnInit(): void {
    this.eventos()
  }
  public eventos() {
    this.personagensService.getevento().subscribe(
      (data) => {
        this.evento = data.data.results;
        this.hasValue = true
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
