import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacto-design',
  templateUrl: './contacto-design.component.html',
  styleUrls: ['./contacto-design.component.css']
})
export class ContactoDesignComponent implements OnInit {

  miFormulario: FormGroup;

  constructor(private builder: FormBuilder, private route: ActivatedRoute, private router: Router) { 
    this.miFormulario = this.builder.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      email: ["", Validators.compose([Validators.email, Validators.required])],
      telefono: ["", Validators.required],
      mensaje: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  formularioEnviado() {
    alert("¡Tu consulta ha sido enviado con éxito!");
    this.router.navigateByUrl("/");
  }

}
