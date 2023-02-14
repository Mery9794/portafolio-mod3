import { Component, OnInit} from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'] 
})
export class InfoComponent implements OnInit{
         // Crear variable de instancia para almacenar los datos con los que trata el Servicio
         info: string='';
     
         constructor(
       //Inyectar el servicio para tener acceso en la clase a los Metodos
         private datosService: DatosService){}
     
     ngOnInit():void{
       //Esto es almacenar en la variable de instancia los datos
       this.datosService.getDatos().subscribe(data => {
         console.log(data);
         //Definir info a mostrar
         this.info=data.info;
       });
      }
    }
