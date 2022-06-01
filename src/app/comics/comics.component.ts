import { Component, OnInit } from '@angular/core';
import { PersonagensService } from 'src/app/service/personagens.service';



@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comics: any;
  imgSize:string = "/portrait_uncanny"
  hasValue:boolean = false
  constructor(private personagensService: PersonagensService,) { }

  ngOnInit(): void {
    this.comic()
  }
  public comic() {
    this.personagensService.getcomics().subscribe(
      (data) => {
        this.comics = data.data.results;
        this.hasValue = true
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
