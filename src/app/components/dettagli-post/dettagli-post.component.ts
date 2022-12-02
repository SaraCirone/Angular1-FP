import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.interface';
import { getPost } from 'src/app/service/cards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-dettagli-post',
    templateUrl: './dettagli-post.component.html',
    styleUrls: ['./dettagli-post.component.scss']
})
export class DettagliPostComponent implements OnInit {

    c: Card | undefined

    constructor(private ar: ActivatedRoute) { }

    ngOnInit(): void {
        let x = this.ar.snapshot.params["id"];
        getPost().then((card: Card[]) => [
            this.c = card.find((element) => {
                if(x == element.id) {
                    return true;
                }
                else {
                    return false
                }
            })
        ])
    }
}
