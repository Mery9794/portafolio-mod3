import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-expdashboard',
  templateUrl: './expdashboard.component.html',
  styleUrls: ['./expdashboard.component.css']
})
export class ExpdashboardComponent implements OnInit{
  // Crear variable de ARRAY EDUCACIONES
  experiencias: any=[];
  ediciones: any=[];

  //Inyectar el servicio para tener acceso en la clase a los Metodos
       constructor(private datosService: DatosService){} 
       
       ngOnInit():void{
         //Esto es almacenar en la variable de instancia los datos
         this.datosService.getDatos().subscribe(data => {
           
         //Definir info a mostrar
         this.experiencias=data.experiencias;
         this.ediciones=data.ediciones;
         });
        }

}

