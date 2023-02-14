import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-acercademi1',
  templateUrl: './acercademi1.component.html',
  styleUrls: ['./acercademi1.component.css']
})
export class Acercademi1Component implements OnInit{ 
  // Crear variable de instancia para almacenar los datos con los que trata el Servicio
  nombre: string='';
  apellido: string='';
  info: string='';
  img: string='';
  titulo: string='';

  constructor(
//Inyectar el servicio para tener acceso en la clase a los Metodos
  private datosService: DatosService){}

ngOnInit():void{
//Esto es almacenar en la variable de instancia los datos
this.datosService.getDatos().subscribe(data => {
  console.log(data);
  //Definir info a mostrar
  this.nombre=data.nombre;
  this.apellido=data.apellido;
  this.info=data.info; 
  this.img=data.img; 
  this.titulo=data.titulo;

});
}
}
