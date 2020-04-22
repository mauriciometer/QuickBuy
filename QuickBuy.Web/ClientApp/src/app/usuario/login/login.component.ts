import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  public mensagem: string;
  public usuario;
  public returnUrl: string;
  public ativar_Spinner: boolean;

  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private usuarioServico: UsuarioServico) {
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.returnUrl = this.activateRouter.snapshot.queryParams['returnUrl'];
  }

  entrar() {

    this.ativar_Spinner = true;
    //forma de implementar uma chamada a um metodo que retorna um Observable
    this.usuarioServico.verificarUsuario(this.usuario)
      .subscribe(
        usuario_json => {
          //será executada no caso de retorno sem erros
          console.log(usuario_json);
          
          //sessionStorage.setItem("usuario-autenticado", "1");
          this.usuarioServico.usuario = usuario_json;


          if (this.returnUrl == null)
          {
            this.router.navigate(['/']);
          }
          else {

            this.router.navigate([this.returnUrl]);
          }
        },
        err => {
          console.log(err.error);
          this.mensagem = err.error;
          this.ativar_Spinner = false;
        }
    );

    //if (this.usuario.email == "mauricio.meter@gmail.com" && this.usuario.senha == "123") {
    //  sessionStorage.setItem("usuario-autenticado", "1");
    //  this.router.navigate([this.returnUrl]);
    //  //this.router.navigate(['/']);
    } 
  }

