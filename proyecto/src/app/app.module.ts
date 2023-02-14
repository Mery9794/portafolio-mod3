import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //se agrego
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Importa los componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pagina/componentes/navbar/navbar.component';
import { GithubComponent } from './pagina/componentes/menu/redes/github/github.component';
import { LinkedlnComponent } from './pagina/componentes/menu/redes/linkedln/linkedln.component';
import { BotonLogautComponent } from './pagina/componentes/menu/usuario/boton-logaut/boton-logaut.component';
import { BotonLoginComponent } from './pagina/componentes/menu/usuario/boton-login/boton-login.component';
import { LoginComponent } from './pagina/componentes/menu/usuario/login/login.component';
import { LogoComponent } from './pagina/componentes/menu/usuario/logo/logo.component';
import { IndexComponent } from './pagina/index/index.component';
import { ErrorComponent } from './pagina/error/error.component';
import { CarrucelComponent } from './pagina/componentes/carrucel/carrucel.component';
import { AcercademiComponent } from './pagina/componentes/acercademi/acercademi.component';
import { FotoynombreComponent } from './pagina/componentes/acercademi/fotoynombre/fotoynombre.component';
import { InfoComponent } from './pagina/componentes/acercademi/info/info.component';
import { EducacionComponent } from './pagina/componentes/educacion/educacion.component';
import { Exp1Component } from './pagina/componentes/experiencia/exp1/exp1.component';
import { HabilidadesComponent } from './pagina/componentes/habilidades/habilidades/habilidades.component';
import { Proyec1Component } from './pagina/componentes/proyecto/proyec1/proyec1.component';
import { FooterComponent } from './pagina/componentes/footer/footer/footer.component';
import { BotonguardarComponent } from './pagina/componentes/footer/botonguardar/botonguardar.component';
import { BotonCorreoComponent } from './pagina/componentes/footer/boton-correo/boton-correo.component';
import { BotonSubirComponent } from './pagina/componentes/footer/boton-subir/boton-subir.component';
import { DashboardComponent } from './pagina/dashboard/dashboard/dashboard.component';
import { NavdashboardComponent } from './pagina/dashboard/navbardashboard/navdashboard/navdashboard.component';
import { Acercademi1Component } from './pagina/dashboard/acercademi1/acercademi1.component';
import { Educacion1Component } from './pagina/dashboard/educacion1/educacion1.component';
import { ExpdashboardComponent } from './pagina/dashboard/expdashboard/expdashboard.component';
import { Habilidades1Component } from './pagina/dashboard/habilidades1/habilidades1.component';
import { ProyectosComponent } from './pagina/dashboard/proyectos/proyectos.component';
import { Carrucel1Component } from './pagina/dashboard/carrucel1/carrucel1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubComponent,
    LinkedlnComponent,
    BotonLogautComponent,
    BotonLoginComponent,
    LoginComponent,
    LogoComponent,
    IndexComponent,
    ErrorComponent,
    CarrucelComponent,
    AcercademiComponent,
    FotoynombreComponent,
    InfoComponent,
    EducacionComponent,
    Exp1Component,
    HabilidadesComponent,
    Proyec1Component,
    FooterComponent,
    BotonguardarComponent,
    BotonCorreoComponent,
    BotonSubirComponent,
    DashboardComponent,
    NavdashboardComponent,
    Acercademi1Component,
    Educacion1Component,
    ExpdashboardComponent,
    Habilidades1Component,
    ProyectosComponent,
    Carrucel1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  //Se agrego
    FormsModule,  //Se agrego
    ReactiveFormsModule  //Se agrego
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
