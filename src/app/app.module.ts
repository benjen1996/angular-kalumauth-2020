import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolesComponent } from './components/roles/roles.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';


//rutas
import {APPROUTING} from './app.routes';



//Services

import { UsuariosService } from './services/usuarios.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsuariosComponent,
    RolesComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APPROUTING
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
