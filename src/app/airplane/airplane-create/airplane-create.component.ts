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
  private sub: any;
  public plane: Plane;

  constructor(
    private formBuilder: FormBuilder,
    private airplaneService: AirplaneService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  changePlane(plane) {

    console.log(plane);

    this.airplaneService.create(plane).subscribe(result => {
      console.log(result);
      this.router.navigate(['/']);
    })

  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }



}
