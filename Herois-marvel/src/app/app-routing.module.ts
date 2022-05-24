import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ PersonagensComponent } from 'src/app/personagens/personagens.component'

const routes: Routes = [
  { path: "personagens", component: PersonagensComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
