import { Pipes } from '@angular/compiler-cli/src/diagnostics/symbols';
import { Component, OnInit } from '@angular/core';
import {RegisterService} from './shared/register.service';
import {Register} from './shared/register';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



   public users: Register[] = [];


    constructor(private usersService: RegisterService) { }

    ngOnInit() {
      this.usersService.getUsers()
        .subscribe(data => this.users = data);
    }

    deleteUser(user) {
      if (confirm('Tem certeza de que deseja excluir '   + user.name + '?')) {
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);

        this.usersService.deleteUser(user.id)
          .subscribe(null,
            err => {
              alert('Não foi possível excluir o usuário.');
              // Revert the view back to its original state
              this.users.splice(index, 0, user);
            });
      }
    }
}
