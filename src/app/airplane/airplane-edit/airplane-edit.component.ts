import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AirplaneService } from 'src/app/services/airplane.service';

@Component({
  selector: 'app-airplane-edit',
  templateUrl: './airplane-edit.component.html',
  styleUrls: ['./airplane-edit.component.scss']
})
export class AirplaneEditComponent implements OnInit {

  private sub: any;
  public id: Number;
  public plane: any;

  constructor(private route: ActivatedRoute, private airplaneService: AirplaneService, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.airplaneService.getPlane(this.id).subscribe(result => {
        this.plane = result;
      });

    });
  }

  changePlane(plane){
    this.airplaneService.update(plane).subscribe(result=>{
      console.log(result);
      this.router.navigate(['/']);
    })
    console.log(plane);

  }

}
