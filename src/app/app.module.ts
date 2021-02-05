import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EstadoService } from './services/estado.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FiltroComponent } from './filtro/filtro.component';
import { AddDicaComponent } from './add-dica/add-dica.component';
import { ListDicaComponent } from './list-dica/list-dica.component';
import { PetsComponent } from './pets/pets.component';
import { VerdicaComponent } from './verdica/verdica.component';
import { VisualizarAnimalComponent } from './visualizar-animal/visualizar-animal.component';
import { CadastroAnimalComponent } from './cadastro-animal/cadastro-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    CadastroComponent,
    FiltroComponent,
    AddDicaComponent,
    ListDicaComponent,
    PetsComponent,
    VerdicaComponent,
    VisualizarAnimalComponent,
    CadastroAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EstadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
