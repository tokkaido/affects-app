import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListaComponent,
    UsuarioComponent
  ],
  declarations: [
    ListaComponent,
    UsuarioComponent
  ]
})
export class UsuariosModule { }
