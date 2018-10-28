import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';
import { AirplaneService } from 'src/app/services/airplane.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Plane } from 'src/app/interfaces/plane';

@Component({
  selector: 'app-airplane-create',
  templateUrl: './airplane-create.component.html',
  styleUrls: ['./airplane-create.component.scss']
})
export class AirplaneCreateComponent implements OnInit {

  public airplaneForm: FormGroup;
  public createErrorMessage = '';
  public id: number;
  private showInvalidFields = false;
  private sub: any;

  constructor(
    private formBuilder: FormBuilder,
    private airplaneService: AirplaneService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.createForm();

  }

  public checkValidationField(fieldName) {
    return {
      'is-invalid': this.isFieldInvalid(fieldName)
    };
  }

  private createForm() {
    this.airplaneForm = this.formBuilder.group({
      model: [
        '', Validators.compose([
          Validators.required
        ])
      ],
      capacity: [
        '', Validators.compose([
          Validators.required,
          Validators.minLength(1)
        ])
      ],
      createdAt: [
        '', Validators.compose([
          Validators.required,
          Validators.minLength(1)
        ])
      ]
    });
  }



  private isFieldInvalid(fieldName) {
    const field = this.airplaneForm.get(fieldName);

    if (field.invalid && field.touched) {
      return true;

    } else if (this.showInvalidFields && field.invalid && field.untouched) {
      return true;

    }

    return false;
  }

  generateErrorMessage(fieldName) {

    const field = this.airplaneForm.get(fieldName).errors;
    let message;

    if (fieldName === 'capacity') {
      if (field.required) {
        message = 'Preencha a capacidade';
      } else if (field.minlength) {
        message = `Capacidade minima de 1`;
      }
    }

    if (fieldName === 'model') {
      if (field.required) {
        message = 'Preencha o Modelo';
      }
    }

    if (fieldName === 'createdAt') {
      if (field.required) {
        message = 'Preencha a data de criação da aeronave';
      }
    }

    if (message) {
      return message;
    }
  }

  submit() {

    let plane: Plane;
    this.createErrorMessage = '';

    if (this.airplaneForm.valid) {

      plane = this.airplaneForm.value;

      this.airplaneService.create(plane).subscribe(result => {
        console.log(result);
        this.router.navigate(['/']);
      })

    } else {
      debugger
    }



  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }



}
