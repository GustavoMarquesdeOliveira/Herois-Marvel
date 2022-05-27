import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ PersonagensComponent } from 'src/app/personagens/personagens.component'
import { ComicsComponent } from './comics/comics.component';
import { EventoComponent } from './evento/evento.component';

const routes: Routes = [
  { path: "personagens", component: PersonagensComponent },
  { path: "comics", component: ComicsComponent },
  { path: "evento", component: EventoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
