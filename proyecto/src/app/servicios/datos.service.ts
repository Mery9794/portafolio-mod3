import { Injectable } from '@angular/core';

//Esto es para poder hacer peticiones
import {HttpClient} from '@angular/common/http';
// Mira lo que paso en los datos pero no se mueven, ya que hay 1 solo dato//
import { Observable } from 'rxjs'; 



@Injectable({
  providedIn: 'root'
})
export class DatosService { 
//El primer http se llama alias
  constructor(private http:HttpClient) { }

//Metodo o Funcion observable que devuelve datos
getDatos():Observable<any> {
  //Se lla al JSON con su path -ruta-, o bien, en su lugar se puede poner una URL para traer datos de un JSON online
  return this.http.get('./assets/json/datos.json') //Este dato es diferente al GetDatos(nombre cualquiera del Get)
}
  
}
