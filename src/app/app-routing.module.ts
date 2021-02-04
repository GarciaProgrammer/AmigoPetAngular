import { VisualizarAnimalComponent } from './visualizar-animal/visualizar-animal.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDicaComponent } from './add-dica/add-dica.component';
import { ListDicaComponent } from './list-dica/list-dica.component';
import { VerdicaComponent } from './verdica/verdica.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'listdicas', component: ListDicaComponent},
  { path: 'novadica', component: AddDicaComponent},
  { path: 'verdica', component: VerdicaComponent},
  { path: 'visualizar', component: VisualizarAnimalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
