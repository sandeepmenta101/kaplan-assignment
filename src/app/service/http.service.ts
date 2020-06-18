import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class HttpService{
    constructor(private http: HttpClient){}

    public getTutorials(){
        return this.http.get('assets/database/data.json');
    }
}