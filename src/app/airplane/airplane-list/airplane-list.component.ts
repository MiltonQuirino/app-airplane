import { Component, OnInit } from '@angular/core';
import { AirplaneService } from 'src/app/services/airplane.service';

@Component({
  selector: 'app-airplane-list',
  templateUrl: './airplane-list.component.html',
  styleUrls: ['./airplane-list.component.scss']
})
export class AirplaneListComponent implements OnInit {

  public data : any

  constructor(private airplaneService: AirplaneService) { }


  ngOnInit() {

    this.getList();
  }

  private getList(){
    this.airplaneService.getPlanes().subscribe( result =>{
      this.data = result
    });
    
  }
   
  delete(data){
    this.airplaneService.delete(data.id).subscribe(result => {
      this.getList();
    })
    console.log(data);
  }

  

}
