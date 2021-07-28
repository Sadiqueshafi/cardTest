import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardService } from '../card.service';

@Component({
  selector: 'app-verticalcart',
  templateUrl: './verticalcart.component.html',
  styleUrls: ['./verticalcart.component.scss']
})
export class VerticalcartComponent implements OnInit {
  public getData: any[]=[];
  p: number = 1;
  public totalLength:any;
  showPortal = false;
  url:any[]=[];
  a:any;
  // gettingData: Observable<any[]> = this.http.getlistData();
  constructor(private http:CardService) { }

  ngOnInit(): void {
    this.http.getData().subscribe(data=>{
      this.getData = data.data;
      // console.log(data.data);
      // this.totalLength = data.data.length;
      this.url = data.data;
      for(var i=0; i< this.url.length; i++){
        this.a = this.url[i];
        console.log('adf'+this.a["link"])
      }
      // console.log('adf' + this.url)
    })

  }
  card(i:any){
    // if(window.location.href.indexOf('#cardModel') != -1) {
      // document.querySelector('#cardModel');
            // $('#cardModel').modal('show');
    // }
    console.log(i);
        window.open(i,"_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
    // this.url = this.gettingData;
//     console.log("this is a"+ this.a["link"])

// console.log(this.url);
  // const myWindow = window.open("", "MsgWindow", "width=200,height=100");
  // myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");

  }

}
