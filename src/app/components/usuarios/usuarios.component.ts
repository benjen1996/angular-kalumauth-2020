import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  usuarios: any[] = [];


  constructor(private UsuariosService: UsuariosService) {
    this.UsuariosService.getUsuarios().subscribe((data: any) => {

      this.usuarios = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
