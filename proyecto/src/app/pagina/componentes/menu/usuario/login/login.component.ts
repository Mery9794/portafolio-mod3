import { Component, OnInit } from '@angular/core';
// importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  form: FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){ 
    ///Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      user:['', [Validators.required, Validators.maxLength(8)]],
      password:['',[Validators.required, Validators.minLength(8)]],  
   })
  }

  ngOnInit() {}

  get Password(){
    return this.form.get("password");
  }
 
  get User(){
   return this.form.get("user");
  }
//Metodo de validacion
  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
//Metodo de validacion
  get UserValid() {
    return this.User?.touched && !this.User?.valid;
  }
 

  onEnviar(event: Event){ event.preventDefault; 
    // Detenemos la propagación o ejecución del compotamiento submit de un form
   
    if (this.form.valid)
    {
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }
    else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }


}