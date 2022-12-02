import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/users.interface';
import { getUsers } from 'src/app/service/users.service';

@Component({
    selector: 'app-dettagli-utente',
    templateUrl: './dettagli-utente.component.html',
    styleUrls: ['./dettagli-utente.component.scss']
})
export class DettagliUtenteComponent implements OnInit {

    // users!: Users[]

    u: Users | undefined

    constructor(private ar: ActivatedRoute) { }

    ngOnInit(): void {
        let x = this.ar.snapshot.params["id"]; //snapshopt è l'URL attuale, una foto dell'attuale situazione delle rotte, PARAMS sono i parametri che estrapoliamo dall'URL e nelle [NOME DEL PARAMETRO]
        getUsers().then((users: Users[]) => {
            this.u = users.find((element) => { //find metodo degli array che cicla l'array e su ogni elemento esegue la funzione parametro, anche al funzione freccia riceve un parametro che è l'elemento ad ogni iterazione (a ogni giro del ciclo), questa funzione deve restituire true se l'elemento è quello giusto o false se è quello sbaglito
                if(x == element.id) {
                    return true;
                }
                else {
                    return false
                }
            });
        });
    }

}
