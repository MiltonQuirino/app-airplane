import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Plane } from 'src/app/interfaces/plane';

@Component({
  selector: 'app-airplane-form',
  templateUrl: './airplane-form.component.html',
  styleUrls: ['./airplane-form.component.scss']
})
export class AirplaneFormComponent implements OnInit {

  @Output() changePlane = new EventEmitter();
  @Input() plane: any;
  @Input() formType;

  public airplaneForm: FormGroup;
  private showInvalidFields = false;
  public createErrorMessage = '';
  public type = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.normalize();
    this.createForm();
    this.setTypeForm();
  }

  public checkValidationField(fieldName) {
    return {
      'is-invalid': this.isFieldInvalid(fieldName)
    };
  }

  private createForm() {
    this.airplaneForm = this.formBuilder.group({
      id: [
        this.plane.id
      ],
      model: [
        this.plane.model || '', Validators.compose([
          Validators.required
        ])
      ],
      capacity: [
        this.plane.capacity || '', Validators.compose([
          Validators.required,
          Validators.minLength(1)
        ])
      ],
      createdAt: [
        // this.plane.createdAt || '', Validators.compose([
        this.plane.createdAt, Validators.compose([
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

  private normalize() {

    if (!this.plane) {
      this.plane = { id: 0, model: null, createdAt: null, capacity: null };
    } else {
      this.plane.createdAt = this.plane.createdAt.split('T')[0];
    }
  }

  public setTypeForm() {
    this.type = this.formType === 'edit-form' ? 'Editar' : 'Cadastrar';
  }

  submit() {

    let plane;
    this.createErrorMessage = '';

    if (this.airplaneForm.valid) {

      plane = this.airplaneForm.value;
      this.changePlane.emit(plane);

    } else {
      this.createErrorMessage = 'Preencha todos os campos corretamente.'
    }

  }


}
