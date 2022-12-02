import { compileDeclarePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    registra(titolo: string, body: string, type: string, author: string) {
        if (titolo != "" && body != "" && type != "" && author != "") {
            let data = {
                body: body,
                title: titolo,
                active: true,
                type: type,
                author: author
            }
            this.addData(data);
            location.reload();
        }
    }

    addData(data: any) {
        fetch('http://localhost:3000/lista', {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(data),
        });
    }
}
