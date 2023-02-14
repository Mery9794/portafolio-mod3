import { Component, OnInit} from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  // Crear variable de instancia para almacenar los datos con los que trata el Servicio
  proyectos: any=[];
  ediciones: any=[];
  
//Inyectar el servicio para tener acceso en la clase a los Metodos
  constructor(private datosService: DatosService){}


ngOnInit():void{
//Esto es almacenar en la variable de instancia los datos
this.datosService.getDatos().subscribe(data => {
  
  //Definir info a mostrar
  this.proyectos=data.proyectos;
  this.ediciones=data.ediciones;
  
});
}
}

 