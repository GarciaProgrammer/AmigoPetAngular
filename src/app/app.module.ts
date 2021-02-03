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
import { AnimalComponent } from './animal/animal.component';
import { FormsModule } from '@angular/forms';
import { EstadoService } from './services/estado.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadAnimalComponent } from './cad-animal/cad-animal.component';
import { FiltroComponent } from './filtro/filtro.component';
import { AddDicaComponent } from './add-dica/add-dica.component';
import { ListDicaComponent } from './list-dica/list-dica.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    AnimalComponent,
    CadastroComponent,
    CadAnimalComponent,
    FiltroComponent,
    AddDicaComponent,
    ListDicaComponent
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
