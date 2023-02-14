import { Component, OnInit} from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-proyec1',
  templateUrl: './proyec1.component.html',
  styleUrls: ['./proyec1.component.css']
})
export class Proyec1Component implements OnInit{
  // Crear variable de instancia para almacenar los datos con los que trata el Servicio
  proyectos: any=[];
  
//Inyectar el servicio para tener acceso en la clase a los Metodos
  constructor(private datosService: DatosService){}


ngOnInit():void{
//Esto es almacenar en la variable de instancia los datos
this.datosService.getDatos().subscribe(data => {
  
  //Definir info a mostrar
  this.proyectos=data.proyectos;
  
});
}
}

 