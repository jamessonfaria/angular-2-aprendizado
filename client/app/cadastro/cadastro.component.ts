import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {
    foto: FotoComponent = new FotoComponent();
    http: Http;

    constructor(http: Http){
        this.http = http;
    }

    cadastrar(event) {
        event.preventDefault();
        console.log(this.foto);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http
            .post('v1/fotos', JSON.stringify(this.foto), { headers: headers})
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log("foto salva com sucesso")
            }, erro => console.log(erro));

    }

}