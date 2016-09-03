import {Component} from 'angular2/core';

@Component({
    selector: 'User-Tag',
    templateUrl: 'app/templates/User.html'
})

export class UserComponent {
    FirstName: string = '';
    LastName: string = '';
    Phone: string = '';
    Password: string = '';
    Email: string = '';
    
}