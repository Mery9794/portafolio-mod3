import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-educacion1',
  templateUrl: './educacion1.component.html',
  styleUrls: ['./educacion1.component.css']
})
export class Educacion1Component implements OnInit {
          
  // Crear variable de ARRAY EDUCACIONES
          educaciones: any=[];
          ediciones:any=[];

 //Inyectar el servicio para tener acceso en la clase a los Metodos
      constructor(private datosService: DatosService){} 
      
      ngOnInit():void{
        //Esto es almacenar en la variable de instancia los datos
        this.datosService.getDatos().subscribe(data => {
          
        //Definir info a mostrar
        this.educaciones=data.educaciones;
        this.ediciones=data.ediciones;
        });
       }

}
