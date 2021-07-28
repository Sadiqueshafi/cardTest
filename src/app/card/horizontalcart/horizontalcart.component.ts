import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-horizontalcart',
  templateUrl: './horizontalcart.component.html',
  styleUrls: ['./horizontalcart.component.scss']
})
export class HorizontalcartComponent implements OnInit {
  public getData: any[]=[];

  p: number = 1;
  public totalLength:any;
  constructor(private http:CardService) { }

  ngOnInit(): void {
    this.http.getData().subscribe(data=>{
      this.getData = data.data;
      console.log(data.data.length)
      this.totalLength = data.data.length;

    })
  }

}
