import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

    this.createForm();
    this.setTypeForm();
    // this.airplaneForm.setValue(this.plane);
  }

  public setTypeForm() {
    this.type = this.formType === 'edit-form' ? 'Editar' : 'Cadastrar';
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
        this.plane.model, Validators.compose([
          Validators.required
        ])
      ],
      capacity: [
        this.plane.capacity, Validators.compose([
          Validators.required,
          Validators.minLength(1)
        ])
      ],
      createdAt: [
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

  submit() {

    let plane;
    this.createErrorMessage = '';

    if (this.airplaneForm.valid) {

      plane = this.airplaneForm.value;
      this.changePlane.emit(plane);

    } else {
      debugger
    }



  }


}
