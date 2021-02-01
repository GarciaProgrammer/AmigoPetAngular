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
<<<<<<< HEAD
import { FiltroComponent } from './filtro/filtro.component';
=======
import { AnimalComponent } from './animal/animal.component';
import { FormsModule } from '@angular/forms';
import { EstadoService } from './services/estado.service';
>>>>>>> 44a3ac911d01a27abc0f89659affb7b4a25982f7

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
<<<<<<< HEAD
    FiltroComponent
=======
    AnimalComponent
>>>>>>> 44a3ac911d01a27abc0f89659affb7b4a25982f7
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
