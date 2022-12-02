import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.interface';
import { getUsers } from 'src/app/service/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users!: Users[]

    constructor() { }


    ngOnInit(): void {
        getUsers().then(users => {
            console.log(users)
            this.users = users;
            console.log(users)
        })
    }

}
