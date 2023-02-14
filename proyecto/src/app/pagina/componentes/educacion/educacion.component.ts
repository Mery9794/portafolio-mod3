import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({ 
  selector: 'app-educacion', 
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
          
  // Crear variable de ARRAY EDUCACIONES
          educaciones: any=[];

 //Inyectar el servicio para tener acceso en la clase a los Metodos
      constructor(private datosService: DatosService){} 
      
      ngOnInit():void{
        //Esto es almacenar en la variable de instancia los datos
        this.datosService.getDatos().subscribe(data => {
          
        //Definir info a mostrar
        this.educaciones=data.educaciones;
        });
       }

}
