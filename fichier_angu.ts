import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

interface User {  
    id: number;  
    name: string;  
}  

@Injectable({  
    providedIn: 'root'  
})  
export class UserService {  
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';  

    constructor(private http: HttpClient) {}  

    getUsers(): Observable<User[]> {  
        return this.http.get<User[]>(this.apiUrl);  
    }  
}  

import { Component, OnInit } from '@angular/core';  

@Component({  
    selector: 'app-user-list',  
    template: `  
        <div *ngFor="let user of users">  
            {{ user.name }}  
        </div>  
    `  
})  
export class UserListComponent implements OnInit {  
    users: User[] = [];  

    constructor(private userService: UserService) {}  

    ngOnInit() {  
        this.userService.getUsers().subscribe(data => {  
            this.users = data;  
        });  
    }  
}