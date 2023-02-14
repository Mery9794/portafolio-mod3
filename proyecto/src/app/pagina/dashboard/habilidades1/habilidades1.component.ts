import { Component, OnInit} from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-habilidades1',
  templateUrl: './habilidades1.component.html',
  styleUrls: ['./habilidades1.component.css']
})
export class Habilidades1Component implements OnInit{
  // Crear variable de instancia para almacenar los datos con los que trata el Servicio
  habilidades: any=[];
  ediciones: any=[];
  
//Inyectar el servicio para tener acceso en la clase a los Metodos
  constructor(private datosService: DatosService){}


ngOnInit():void{
//Esto es almacenar en la variable de instancia los datos
this.datosService.getDatos().subscribe(data => {
  
  //Definir info a mostrar
  this.habilidades=data.habilidades;
  this.ediciones=data.ediciones;
});
}
}

