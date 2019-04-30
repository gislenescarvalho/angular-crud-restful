import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Register } from '../shared/register';
import { RegisterService } from '../shared/register.service';
import { BasicValidators } from '../../shared/basic-validators';


import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  user: Register = new Register();


  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: RegisterService
  ) {

    this.form = formBuilder.group({
     /* id: [
      ],*/
      nome: [null, [
        Validators.required,
        Validators.minLength(3)
      ]],
      dataNascimento: [null, [
        Validators.required, BasicValidators.date
      ]],
      identificacao: [ null,   [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)]
     ],
      sexo: [ null, Validators.required
      ],
      endereco: [null, [Validators.required,
                    Validators.minLength(3),
                     Validators.maxLength(50)]]
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar ' : 'Adicionar';

      if (!id) 
        return;
      
      this.usersService.getUser(id)
        .subscribe(
          user => this.user = user,
          response => {
            if (response.status === 404) {
              this.router.navigate(['not-found']);
            }
          });
    });
  }

  save() {
    var result,userValue = this.form.value;

    if (userValue.id) {
      console.log(this.form.value);
      result = this.usersService.updateUser(userValue.id, userValue);
    } else {
      result = this.usersService.addUser(userValue);
    }

    result.subscribe(data => this.router.navigate(['users']));
  }
}

