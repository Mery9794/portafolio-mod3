import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pagina/dashboard/dashboard/dashboard.component';
import { ErrorComponent } from './pagina/error/error.component';
import { IndexComponent } from './pagina/index/index.component';

const routes: Routes = [
{path:'index', component:IndexComponent},  //RUTAS SE PONEN EN ORDEN//
{path:'dashboard', component:DashboardComponent}, //se enlasa con el dashboar y se puede regresar al inicio//
{path:'', redirectTo:'/index', pathMatch:'full'},  //ssi no escribis nada te REDIRIGIR//
{path:'**', component:ErrorComponent} //si escribis cualquier cosa osea eso hace referencia del acterisco//
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
